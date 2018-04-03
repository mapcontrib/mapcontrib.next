import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import { RedTheme, Sidebar, Form } from 'osm-ui-react';
import { nectarivore } from 'helpers/requests';

const StyledDiv = styled.div`
  .nameOption {
    color: black;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 1rem;
    border-bottom: 1px solid #ddd;
  }

  .nameHeader {
    color: black;
    height: 25px;
    background-color: #eee;
    font-weight: bold;
    font-size: 0.85;
  }

  .nameOptionFocused {
    background-color: rgba(0, 126, 255, 0.1);
  }

  .nameOptionSelected {
    font-weight: bold;
  }
`;

function NameOptionRenderer({
  focusedOption,
  focusedOptionIndex,
  focusOption,
  key,
  labelKey,
  option,
  optionIndex,
  options,
  selectValue,
  style,
  valueArray,
  valueKey
}) {
  const classNames = classnames({
    nameOption: true,
    nameHeader: option.type === 'header',
    nameOptionFocused: option === focusedOption
  });

  if (option.type === 'header') {
    return (
      <div className={classNames} key={key} style={style}>
        {option.name}
      </div>
    );
  } else {
    return (
      <div
        className={classNames}
        key={key}
        onClick={() => selectValue(option)}
        onMouseEnter={() => focusOption(option)}
        style={style}
      >
        {option.name}
      </div>
    );
  }
}

class OsmoseLayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: Array.from(props.layers.keys())
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.fetchOsmoseCategories();
  }

  handleChange(selectedItems) {
    const { layers, addLayer, addPointsToLayer, removeLayer } = this.props;

    selectedItems.forEach(item => {
      if (!layers.has(item.id))
        addLayer({
          id: item.id,
          leafletLayer: nectarivore.createOsmose(item.id, points =>
            addPointsToLayer(item.id, points)
          ),
          type: 'osmose'
        });
    });

    const selectedIds = selectedItems.map(item => item.id);

    Array.from(layers.keys()).forEach(key => {
      if (!selectedIds.includes(key)) removeLayer(key);
    });

    this.setState({
      selectedItems: selectedItems.map(item => item.id)
    });
  }

  render() {
    const { selectedItems } = this.state;
    const { categories } = this.props;

    if (!categories) return null;

    return (
      <RedTheme>
        <StyledDiv>
          <Sidebar
            opened
            position="right"
            title="Add Osmose layer"
            {...this.props}
          >
            <Form.Select
              autoFocus={false}
              multi
              searchable
              labelKey="name"
              valueKey="id"
              onChange={this.handleChange}
              options={categories}
              optionRenderer={NameOptionRenderer}
              value={selectedItems}
            >
              Select Osmose Item
            </Form.Select>
          </Sidebar>
        </StyledDiv>
      </RedTheme>
    );
  }
}

OsmoseLayerSidebar.propTypes = {
  categories: PropTypes.array.isRequired
};

OsmoseLayerSidebar.defaultProps = {};

export default OsmoseLayerSidebar;
