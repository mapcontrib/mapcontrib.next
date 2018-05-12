import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Sidebar, Form } from 'osm-ui-react';

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
    this.updateOsmoseLayers = this.updateOsmoseLayers.bind(this);
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.fetchOsmoseCategories();
  }

  updateOsmoseLayers() {
    const { selectedItems } = this.state;
    const { layers, addOsmoseLayer, removeLayerById } = this.props;

    const existingLayerIds = Object.keys(layers).map(id => parseInt(id, 10));

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
      () => {
        this.updateOsmoseLayers();

        // FIXME - To remove
        window.localStorage.setItem(
          'osmoseSelectedItems',
          JSON.stringify(nextSelectedItems)
        );
      }
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
  themePath: PropTypes.string.isRequired,
  fetchOsmoseCategories: PropTypes.func.isRequired,
  removeLayerById: PropTypes.func.isRequired,
  addOsmoseLayer: PropTypes.func.isRequired
};

OsmoseLayerSidebar.defaultProps = {};

OsmoseLayerSidebar.displayName = 'OsmoseLayerSidebar';

export default OsmoseLayerSidebar;
