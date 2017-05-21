import React from 'react';
import PropTypes from 'prop-types';
import {
    RedTheme,
    Titlebar,
} from 'osm-ui-react';


const Title = ({ title, ...props }) => (
    <RedTheme>
        <Titlebar>{title}</Titlebar>
    </RedTheme>
);


Title.propTypes = {
    title: PropTypes.string.isRequired,
};


Title.defaultProps = {
};

export default Title;
