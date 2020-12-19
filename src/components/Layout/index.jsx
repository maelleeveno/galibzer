import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Container } from 'semantic-ui-react';

const Layout = (props) => {
    return (
        <Container fluid>
            <Header />
            <Container fluid>
                {props.children}
            </Container>
            <Footer />
        </Container>
    )
}

export default Layout;