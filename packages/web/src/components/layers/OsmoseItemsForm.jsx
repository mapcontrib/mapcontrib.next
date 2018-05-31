import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'osm-ui-react';

class OsmoseItemsForm extends React.Component {
  constructor(props) {
    super(props);

    // at this point, all sources should be of type OSMOSE
    this.state = {
      selectedItems: this.storeItemsByCategory(this.props.items)
    };
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.fetchOsmoseCategories();
  }

  storeItemsByCategory(items) {
    const storedItems = {};

    items.forEach(selectedItem =>
      this.props.categories.forEach(category => {
        const found = category.items.find(item => item.id === selectedItem);
        if (found) {
          if (!storedItems[category.id]) storedItems[category.id] = [found];
          else storedItems[category.id].push(found);
        }
      })
    );

    return storedItems;
  }

  handleChange(categoryId, selectedItems) {
    const nextSelectedItems = { ...this.state.selectedItems };

    nextSelectedItems[categoryId] = selectedItems.map(item => item.id);

    const allItems = Object.values(nextSelectedItems).reduce(
      (acc, items) => acc.concat(items),
      []
    );

    this.setState(
      {
        selectedItems: nextSelectedItems
      },
      () => this.props.handleSources(allItems)
    );
  }

  render() {
    const { selectedItems } = this.state;

    return (
      <Form.Group>
        <div>Choose Osmose Items</div>
        {this.props.categories.map(category => {
          const selectId = `osmose-select-${category.id}`;
          return (
            <Fragment key={category.id}>
              <Form.Label htmlFor={selectId}>{category.name}</Form.Label>
              <Form.Select
                id={selectId}
                placeholder="Select Osmose items..."
                autoFocus={false}
                multi
                searchable
                labelKey="name"
                valueKey="id"
                onChange={selectedItems =>
                  this.handleChange(category.id, selectedItems)
                }
                options={category.items}
                value={selectedItems[category.id]}
              />
            </Fragment>
          );
        })}
      </Form.Group>
    );
  }
}

OsmoseItemsForm.propTypes = {
  items: PropTypes.array,
  categories: PropTypes.array.isRequired,
  fetchOsmoseCategories: PropTypes.func.isRequired,
  handleSources: PropTypes.func.isRequired
};

OsmoseItemsForm.defaultProps = {
  items: []
};

OsmoseItemsForm.displayName = 'OsmoseItemsForm';

export default OsmoseItemsForm;
