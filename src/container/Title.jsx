import React from 'react';
import PropTypes from 'prop-types';

import TitleComponent from '../component/Title';


const Title = ({ title, ...props }) => (
    <TitleComponent title={title} />
);


Title.propTypes = {
    title: PropTypes.string.isRequired,
};

Title.defaultProps = {
};

export default Title;
