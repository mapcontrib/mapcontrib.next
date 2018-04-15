import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Sidebar, Form } from 'osm-ui-react';
import { OSMOSE_SOURCE } from 'const/layerSource';
import { nectarivore } from 'helpers/requests';

class OsmoseLayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: Object.keys(props.layers)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.fetchOsmoseCategories();
  }

  handleChange(categoryId, selectedItems) {
    const {
      layers,
      addLayer,
      addSourceToLayerById,
      addFeaturesToSourceById,
      removeLayerById
    } = this.props;
    const nextSelectedItems = { ...this.state.selectedItems };

    selectedItems.forEach(item => {
      if (!layers[item.id]) {
        addLayer({
          id: item.id
        });

        addSourceToLayerById(item.id, {
          id: item.id,
          type: OSMOSE_SOURCE,
          leafletLayer: nectarivore.createOsmose(item.id, features =>
            addFeaturesToSourceById(item.id, features)
          )
        });
      }
    });

    nextSelectedItems[categoryId] = selectedItems.map(item => item.id);
    const selectedIds = Object.keys(nextSelectedItems).reduce(
      (acc, id) => [...acc, ...nextSelectedItems[id]],
      []
    );

    Object.keys(layers).forEach(key => {
      if (!selectedIds.includes(key)) removeLayerById(key);
    });

    this.setState({
      selectedItems: nextSelectedItems
    });
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
