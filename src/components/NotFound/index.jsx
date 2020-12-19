import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react';
import Layout from '../Layout';
import Title from '../Title';
import './notfound.scss';

import gif404 from '../../assets/images/404.gif';

const NotFound = () => {
    return(
        <Layout>
            <Title title="404 | Pacôme Gabrillagues"/>
            <section class="not-found">
                <Image src={gif404} className="gif404" centered alt=""/>
                <p class="oops bold">Oops, wrong way.</p>
                <Link to="/home"><p><Icon name="arrow left"/>Keep calm and go back home.</p></Link>
            </section>
        </Layout>
    );
}

export default NotFound;