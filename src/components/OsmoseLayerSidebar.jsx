import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import { RedTheme, Sidebar, Form, Button } from 'osm-ui-react';
import { nectarivore } from '../helpers/requests';

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
  constructor() {
    super();

    this.state = {
      selectedItems: []
    };
  }

  componentDidMount() {
    this.props.fetchOsmoseCategories();
  }

  render() {
    const { selectedItems } = this.state;
    const { categories, layers, addLayer, removeLayer } = this.props;

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
              onChange={selectedItems => {
                selectedItems.forEach(item => {
                  if (!layers.has(item.id))
                    addLayer({
                      id: item.id,
                      leafletLayer: nectarivore.createOsmose(
                        item.id,
                        points => {
                          console.log('updating', item.id);
                          this.props.addPointsToLayer(item.id, points);
                        }
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
              }}
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
  categories: PropTypes.array
};

OsmoseLayerSidebar.defaultProps = {
  categories: []
};

export default OsmoseLayerSidebar;