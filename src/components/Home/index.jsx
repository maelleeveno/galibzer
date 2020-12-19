import React from 'react';
import Layout from '../Layout';
import About from './About';
import Title from '../Title';
import ReactPlayer from 'react-player'
import homeGif from '../../assets/images/home.mp4';
import './home.scss';




const Home = () => {
	return (
		<Layout>
			<section id="home">
				<Title title="Home | Pacôme Gabrillagues"/>
					<ReactPlayer url={homeGif} className="home-gif" playsinline={true} muted={true} playing={true} loop={true} width="100%"/>
				<About/>
			</section>
		</Layout>
	);
}

export default Home;