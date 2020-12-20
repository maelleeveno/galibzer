import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';

import dusty1 from '../../assets/images/clip/dusty/DUSTY_1.gif';
import dusty2 from '../../assets/images/clip/dusty/DUSTY_2.gif';
import dusty3 from '../../assets/images/clip/dusty/DUSTY_3.gif';

const Dusty = () => {

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
        rebuildOnUpdate: true,
        shouldSwiperUpdate: true,
        observer: true,
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
		<section className="clip">
			<Grid className="clip-subsection">
				<Grid.Row columns={2}>
					<Grid.Column className="carousel">
						<Swiper {...params}>
							<img className="gif swiper-slide" src={dusty1} alt="" />
							<img className="gif swiper-slide" src={dusty2} alt="" />
							<img className="gif swiper-slide" src={dusty3} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Boogie Bogger <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">Performed by</span><br/>Dusty Mush</p>
								<p><span className="bold">Directed & illustrations by</span><br/>Pacôme Gabrillagues</p>
								<a href="https://youtu.be/coO2IRQwjcw" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default Dusty;