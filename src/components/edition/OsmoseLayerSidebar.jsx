import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Sidebar, Form } from 'osm-ui-react';
import { updateOsmoseLayers } from 'helpers/map';

class OsmoseLayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    // FIXME - To remove
    const selectedItems = JSON.parse(
      window.localStorage.getItem('osmoseSelectedItems') || '{}'
    );

    this.state = {
      selectedItems: selectedItems
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.fetchOsmoseCategories();
  }

  handleChange(categoryId, selectedItems) {
    const nextSelectedItems = { ...this.state.selectedItems };

    nextSelectedItems[categoryId] = selectedItems.map(item => item.id);

    this.setState({
      selectedItems: nextSelectedItems
    });

    updateOsmoseLayers(
      this.props.layers,
      nextSelectedItems,
      this.props.dispatch
    );

    // FIXME - To remove
    window.localStorage.setItem(
      'osmoseSelectedItems',
      JSON.stringify(nextSelectedItems)
    );
  }

  render() {
    const { selectedItems } = this.state;
    const { categories, history, match, themePath } = this.props;

    return (
      <RedTheme>
        <Sidebar
          opened={!!match}
          position="right"
          title="Osmose layer"
          onClickClose={() => history.replace(themePath)}
          {...this.props}
        >
          {categories.map(category => {
            const selectId = `osmose-select-${category.id}`;
            return (
              <Form.Group key={category.id}>
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
              </Form.Group>
            );
          })}
        </Sidebar>
      </RedTheme>
    );
  }
}

OsmoseLayerSidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  layers: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

OsmoseLayerSidebar.defaultProps = {};

OsmoseLayerSidebar.displayName = 'OsmoseLayerSidebar';

export default OsmoseLayerSidebar;
