import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import perso1 from '../../assets/images/motion/perso/PERSO_1.gif';
import perso2 from '../../assets/images/motion/perso/PERSO_2.gif';
import perso3 from '../../assets/images/motion/perso/PERSO_3.gif';

const Perso = () => {

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
                        <Swiper {...params} className="swiper-carousel">
                            <img className="gif swiper-slide" src={perso1} alt="" />
                            <img className="gif swiper-slide" src={perso2} alt="" />
                            <img className="gif swiper-slide" src={perso3} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Personal Works <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">About the project</span><br/>Some Animate CC and AfterEffects works.</p>
                                <a href="https://instagram.com/galibzer" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="linkify"/> View more</p></a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default Perso;