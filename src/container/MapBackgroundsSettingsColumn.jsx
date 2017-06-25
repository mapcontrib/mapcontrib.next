import React from 'react';
import { connect } from 'react-redux';
import MapBackgroundsSettingsColumnComponent from '../component/MapBackgroundsSettingsColumn';


class MapBackgroundsSettingsColumn extends React.Component {
    render() {
        const { history, themePath } = this.props;

        return (
            <MapBackgroundsSettingsColumnComponent
                onClickClose={() => {history.replace(themePath)}}
            />
        );
    }
}


MapBackgroundsSettingsColumn.propTypes = {
};

MapBackgroundsSettingsColumn.defaultProps = {
};

const mapStateToProps = state => ({
    themePath: state.theme.path,
});

export default connect(mapStateToProps)(MapBackgroundsSettingsColumn);
