import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../component/RightToolbar';


const RightToolbar = ({
    match,
    history,
}) => (
    <Toolbar
        onClickUser={() => history.push(`${match.url}/user`)}
        onClickShare={() => history.push(`${match.url}/share`)}
        onClickEdition={() => history.push(`${match.url}/edition`)}
        onClickSettings={() => history.push(`${match.url}/settings`)}
    />
);


RightToolbar.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

RightToolbar.defaultProps = {
};

export default RightToolbar;
