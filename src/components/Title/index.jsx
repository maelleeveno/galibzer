import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ title }) => {
    var defaultTitle ="Pacôme Gabrillagues - Portfolio";
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default Title;