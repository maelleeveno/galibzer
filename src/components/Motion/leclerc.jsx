import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import leclerc1 from '../../assets/images/motion/leclerc/LECLERC_01.gif';
import leclerc2 from '../../assets/images/motion/leclerc/LECLERC_02.gif';
import leclerc3 from '../../assets/images/motion/leclerc/LECLERC_03.gif';

const Leclerc = () => {

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
							<img className="gif swiper-slide" src={leclerc1} alt="" />
							<img className="gif swiper-slide" src={leclerc2} alt="" />
							<img className="gif swiper-slide" src={leclerc3} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Leclerc <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">Illustrations by</span><br/>Antoine Corbineau</p>
								<p><span className="bold">About the project</span><br/>2020 Tour de France campaign.</p>
								<p><span className="bold">Produced by</span><br/>General Pop @ BETC</p>
								<a href="https://youtu.be/29WwYn6M-tQ" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default Leclerc;