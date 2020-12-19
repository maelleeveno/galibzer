import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import './motion.scss';
import 'swiper/swiper.scss';

import Hennessy from './hennessy';
import AirFrance from './airfrance';
import Peugeot from './peugeot';
import Orangina from './orangina';
import Leclerc from './leclerc';
import BigInJapan from './biginjapan';
import DeParis from './deparis';
import ChicagoFire from './chicagofire';

const Motion = () => {
	return (
		<Layout>
			<Title title="Motion | Pacôme Gabrillagues"/>
			<section id="motion">
				<Hennessy/>
				<AirFrance/>
				<BigInJapan/>
				<Orangina/>
				<Peugeot/>
				<DeParis/>
				<Leclerc/>
				<ChicagoFire/>
			</section>
		</Layout>
	);
}

export default Motion;