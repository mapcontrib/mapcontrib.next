import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Sidebar, Form } from 'osm-ui-react';

class OsmoseLayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    // FIX ME: for now, one osmose layer has only one source, and the layer id is the osmose item
    const items = props.layers.map(layer => layer.id);

    this.state = {
      selectedItems: this.storeItemsByCategory(items)
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateOsmoseLayers = this.updateOsmoseLayers.bind(this);
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

  updateOsmoseLayers() {
    const { selectedItems } = this.state;
    const { layers, addOsmoseLayer, removeLayerById } = this.props;

    const existingLayerIds = layers.map(layer => parseInt(layer.id, 10));

    const selectedIds = Object.keys(selectedItems).reduce(
      (acc, id) => [...acc, ...selectedItems[id]],
      []
    );

    selectedIds.forEach(id => {
      if (!existingLayerIds.includes(id)) {
        console.log('adding', id);
        addOsmoseLayer(id);
      }
    });

    existingLayerIds.forEach(id => {
      if (!selectedIds.includes(id)) {
        console.log('removing', id);
        removeLayerById(id);
      }
    });
  }

  handleChange(categoryId, selectedItems) {
    const nextSelectedItems = { ...this.state.selectedItems };

    nextSelectedItems[categoryId] = selectedItems.map(item => item.id);

    this.setState(
      {
        selectedItems: nextSelectedItems
      },
      () => this.updateOsmoseLayers()
    );
  }

  render() {
    const { selectedItems } = this.state;
    const { categories, history, match, themePath } = this.props;

    console.log('Selected Items', selectedItems);

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
  layers: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired,
  fetchOsmoseCategories: PropTypes.func.isRequired,
  removeLayerById: PropTypes.func.isRequired,
  addOsmoseLayer: PropTypes.func.isRequired
};

OsmoseLayerSidebar.defaultProps = {};

OsmoseLayerSidebar.displayName = 'OsmoseLayerSidebar';

export default OsmoseLayerSidebar;
