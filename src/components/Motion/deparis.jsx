import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import deparis1 from '../../assets/images/motion/de-paris/DEPARIS_01.gif';
import deparis2 from '../../assets/images/motion/de-paris/DEPARIS_02.gif';
import deparis3 from '../../assets/images/motion/de-paris/DEPARIS_03.gif';

const DeParis = () => {

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

	const [showDesc, setShowDesc] = useState('hide');
	const [arrowDir, setArrowDir] = useState('arrow down');

	const onClick = () => {
		if(showDesc === 'hide') {
			setShowDesc('show');
			setArrowDir('arrow up');
		} else {
			setShowDesc('hide');
			setArrowDir('arrow down');
		}
	} 

	return (
		<section className="motion">
			<Grid className="motion-subsection">
				<Grid.Row columns={2}>
					<Grid.Column className="carousel">
						<Swiper {...params}>
							<img className="gif swiper-slide" src={deparis1} alt="" />
							<img className="gif swiper-slide" src={deparis2} alt="" />
							<img className="gif swiper-slide" src={deparis3} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>De Paris <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">About the project</span><br/>Motion graphics for De Paris Yearbook.</p>
								<a href="http://deparisyearbook.com/" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="linkify"/> Learn more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
	);
}

export default DeParis;