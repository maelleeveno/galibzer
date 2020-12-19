import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import chicagoFire1 from '../../assets/images/motion/chicago-fire/CHICAGO_FIRE.gif';

const ChicagoFire = () => {

	const params = {
		/* navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			clickable: true
		}, */
		loop: false,
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
                            <img className="gif swiper-slide" src={chicagoFire1} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Chicago Fire <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">About the project</span><br/>Chicago Fire S1 Trailer<br/>Broadcast on 13e rue</p>
                                <a href="https://www.youtube.com/watch?v=QoHUDQ2aVuw" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default ChicagoFire;