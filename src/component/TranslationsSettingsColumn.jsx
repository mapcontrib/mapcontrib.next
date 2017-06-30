import React from 'react';
import {
    OrangeTheme,
    Column,
} from 'osm-ui-react';


const TranslationsSettingsColumn = props => (
    <OrangeTheme>
        <Column opened position="right" title="Translations" {...props} />
    </OrangeTheme>
);

TranslationsSettingsColumn.propTypes = {
};

TranslationsSettingsColumn.defaultProps = {
};

export default TranslationsSettingsColumn;
