import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import bij1 from '../../assets/images/motion/big-in-japan/LAGARTIJEANDO.gif';
import bij2 from '../../assets/images/motion/big-in-japan/DJ_RAFF.gif';
import bij3 from '../../assets/images/motion/big-in-japan/REFUGIO.gif';

const BigInJapan = () => {

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
							<img className="gif swiper-slide" src={bij1} alt="" />
							<img className="gif swiper-slide" src={bij2} alt="" />
							<img className="gif swiper-slide" src={bij3} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Big In Japan <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">About the project</span><br/>Some works for BIJ records.</p>
								<p><span className="bold">Artists</span><br/>DJ Raff<br/> Lagartijeando<br/>Klik & Frik</p>
								<a href="https://www.biginjapanrecords.com/" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="linkify"/> Learn more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default BigInJapan;