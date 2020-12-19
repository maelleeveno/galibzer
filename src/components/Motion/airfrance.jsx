import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import af1 from '../../assets/images/motion/air-france/AIRFRANCE_1.gif';
import af2 from '../../assets/images/motion/air-france/AIRFRANCE_2.gif';
import af3 from '../../assets/images/motion/air-france/AIRFRANCE_3.gif';
import af4 from '../../assets/images/motion/air-france/AIRFRANCE_4.gif';

const AirFrance = () => {

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
                            <img className="gif swiper-slide" src={af1} alt="" />
                            <img className="gif swiper-slide" src={af2} alt="" />
                            <img className="gif swiper-slide" src={af3} alt="" />
                            <img className="gif swiper-slide" src={af4} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column  className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Air France <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">Directed by</span><br/>Sabine Linères</p>
                                <p><span className="bold">Produced by</span><br/>General Pop @ BETC</p>
                                <a href="https://youtu.be/I3rUJlyzsTU" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default AirFrance;