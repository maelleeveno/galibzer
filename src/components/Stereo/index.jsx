import React from 'react';
import { Icon } from 'semantic-ui-react';
import Layout from '../Layout';
import Title from '../Title';
import Swiper from 'react-id-swiper';
import './stereo.scss';

import stereo1 from '../../assets/images/stereo/stereo_01.gif';
import stereo2 from '../../assets/images/stereo/stereo_02.gif';
import stereo3 from '../../assets/images/stereo/stereo_03.gif';
import stereo4 from '../../assets/images/stereo/stereo_04.gif';
import stereo5 from '../../assets/images/stereo/stereo_05.gif';
import stereo6 from '../../assets/images/stereo/stereo_06.gif';
import stereo7 from '../../assets/images/stereo/stereo_07.gif';
import stereo8 from '../../assets/images/stereo/stereo_08.gif';
import stereo9 from '../../assets/images/stereo/stereo_09.gif';
import stereo10 from '../../assets/images/stereo/stereo_10.gif';
import stereo11 from '../../assets/images/stereo/stereo_11.gif';
import stereo12 from '../../assets/images/stereo/stereo_12.gif';

const Stereo = () => {

	const params = {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			clickable: true
		},
		loop: true,
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
	};

	return (
		<Layout>
			<Title title="Stereo | Pacôme Gabrillagues"/>
			<section id="stereo">
				<Swiper {...params}>
					<img className="gif swiper-slide" src={stereo11} alt="" />
					<img className="gif swiper-slide" src={stereo10} alt="" />
					<img className="gif swiper-slide" src={stereo2} alt="" />
					<img className="gif swiper-slide" src={stereo3} alt="" />
					<img className="gif swiper-slide" src={stereo4} alt="" />
					<img className="gif swiper-slide" src={stereo5} alt="" />
					<img className="gif swiper-slide" src={stereo6} alt="" />
					<img className="gif swiper-slide" src={stereo7} alt="" />
					<img className="gif swiper-slide" src={stereo8} alt="" />
					<img className="gif swiper-slide" src={stereo9} alt="" />
					<img className="gif swiper-slide" src={stereo1} alt="" />
					<img className="gif swiper-slide" src={stereo12} alt="" />
				</Swiper>
				<div className="desc">
					<p>Some pics shot with a Nimslo 3d camera and edited with AE for Instagram</p>
					<a href="https://instagram.com/galibzer" target="_blank" rel="noreferrer"><p><Icon name="instagram"/> View more</p></a>
				</div>
			</section>
		</Layout>
	);
}

export default Stereo;