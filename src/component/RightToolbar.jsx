import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BlueTheme,
  GreenTheme,
  RedTheme,
  OrangeTheme,
  Toolbar
} from 'osm-ui-react';

const StyledToolbar = styled(Toolbar)`
    && {
        top: 40px;
    }
`;

class RightToolbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      settingsOpened: false
    };
  }

  onSettingsClick() {
    this.setState({
      settingsOpened: !this.state.settingsOpened
    });
  }

  render() {
    const {
      onClickUser,
      onClickShare,
      onClickEdition,
      onClickSettings,
      onClickDataLayers,
      onClickMapBackgrounds,
      onClickCustomTags,
      onClickPresets,
      onClickTranslations,
      ...props
    } = this.props;

    return (
      <BlueTheme>
        <StyledToolbar opened position="right-top" {...props}>
          <BlueTheme>
            <Toolbar.Item icon="user" onClick={() => onClickUser()} />
          </BlueTheme>
          <GreenTheme>
            <Toolbar.Item icon="share-alt" onClick={() => onClickShare()} />
          </GreenTheme>
          <RedTheme>
            <Toolbar.Item icon="pencil" onClick={() => onClickEdition()} />
          </RedTheme>
          <OrangeTheme>
            <Toolbar.Collapse
              icon="sliders"
              opened={this.state.settingsOpened}
              onClick={() => this.onSettingsClick()}
            >
              <Toolbar.Group>
                <Toolbar.Item icon="cogs" onClick={() => onClickSettings()} />
                <Toolbar.Item
                  icon="map-marker"
                  onClick={() => onClickDataLayers()}
                />
                <Toolbar.Item
                  icon="map"
                  onClick={() => onClickMapBackgrounds()}
                />
                <Toolbar.Item icon="list" onClick={() => onClickCustomTags()} />
                <Toolbar.Item
                  icon="list-alt"
                  onClick={() => onClickPresets()}
                />
                <Toolbar.Item
                  icon="commenting"
                  onClick={() => onClickTranslations()}
                />
              </Toolbar.Group>
            </Toolbar.Collapse>
          </OrangeTheme>
        </StyledToolbar>
      </BlueTheme>
    );
  }
}

RightToolbar.propTypes = {
  onClickUser: PropTypes.func.isRequired,
  onClickShare: PropTypes.func.isRequired,
  onClickEdition: PropTypes.func.isRequired,
  onClickSettings: PropTypes.func.isRequired,
  onClickDataLayers: PropTypes.func.isRequired,
  onClickMapBackgrounds: PropTypes.func.isRequired,
  onClickCustomTags: PropTypes.func.isRequired,
  onClickPresets: PropTypes.func.isRequired,
  onClickTranslations: PropTypes.func.isRequired
};

RightToolbar.defaultProps = {};

export default RightToolbar;
