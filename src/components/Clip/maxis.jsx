import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';

import maxis1 from '../../assets/images/clip/maxis/MAXIS_1.gif';
import maxis2 from '../../assets/images/clip/maxis/MAXIS_2.gif';
import maxis3 from '../../assets/images/clip/maxis/MAXIS_3.gif';
import maxis4 from '../../assets/images/clip/maxis/MAXIS_4.gif';

const Maxis = () => {

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
		<section className="clip">
			<Grid className="clip-subsection">
				<Grid.Row columns={2}>
					<Grid.Column className="carousel">
						<Swiper {...params}>
							<img className="gif swiper-slide" src={maxis1} alt="" />
							<img className="gif swiper-slide" src={maxis2} alt="" />
							<img className="gif swiper-slide" src={maxis3} alt="" />
							<img className="gif swiper-slide" src={maxis4} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Black Eyes <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">Performed by</span><br/>Thee Maximators</p>
								<p><span className="bold">Directed & illustrations by</span><br/>Pacôme Gabrillagues</p>
								<a href="https://youtu.be/M7XypdwDi6M" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default Maxis;