import React from 'react';
import Layout from '../Layout';
import About from './About';
import Title from '../Title';
import VideoPlayer from '../VideoPlayer';
import './home.scss';

import homeMp4 from '../../assets/images/home.mp4';
import homeWebm from '../../assets/images/home.mp4';

const Home = () => {
	return (
		<Layout>
			<section id="home">
				<Title title="Home | Pacôme Gabrillagues"/>
				<VideoPlayer className="video-player" videoMp4={homeMp4} videoWebm={homeWebm} />
				<About/>
			</section>
		</Layout>
	);
}

export default Home;