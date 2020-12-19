import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';

import kaviar1 from '../../assets/images/clip/kaviar/KAVIAR_1.gif';
import kaviar2 from '../../assets/images/clip/kaviar/KAVIAR_2.gif';
import kaviar3 from '../../assets/images/clip/kaviar/KAVIAR_3.gif';
import kaviar4 from '../../assets/images/clip/kaviar/KAVIAR_4.gif';

const Kaviar = () => {

	const params = {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
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
		<section className="clip">
			<Grid className="clip-subsection">
				<Grid.Row columns={2}>
					<Grid.Column className="carousel">
						<Swiper {...params}>
							<img className="gif swiper-slide" src={kaviar1} alt="" />
							<img className="gif swiper-slide" src={kaviar2} alt="" />
							<img className="gif swiper-slide" src={kaviar3} alt="" />
							<img className="gif swiper-slide" src={kaviar4} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Mind Fuck <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">Performed by</span><br/>Kaviar Special</p>
								<p><span className="bold">Directed by</span><br/>Pacôme Gabrillagues</p>
								<p><span className="bold">Illustrations by</span><br/>Benoît Leray</p>
								<a href="https://youtu.be/OM3yyJS9azg" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default Kaviar;