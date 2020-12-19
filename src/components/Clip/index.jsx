import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import './clip.scss';
import 'react-multi-carousel/lib/styles.css';

import Kaviar from './kaviar';
import Maxis from './maxis';
import Dusty from './dusty';

const Clip = () => {
	
	return (
		<Layout>
			<Title title="Clip | Pacôme Gabrillagues"/>
			<section id="clip">
				<Kaviar/>
				<Maxis/>
				<Dusty/>
			</section>
		</Layout>
	);
}

export default Clip;