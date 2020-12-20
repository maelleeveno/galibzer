import React from 'react';
import Layout from '../Layout';
import About from './About';
import Title from '../Title';
import './home.scss';

import home from '../../assets/images/home.gif';

const Home = () => {
	return (
		<Layout>
			<section id="home">
				<Title title="Home | Pacôme Gabrillagues"/>
				<img className="home-gif" src={home} alt=""/>
				<About/>
			</section>
		</Layout>
	);
}

export default Home;