import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import omsc1 from '../../assets/images/motion/omsc/OMSC_01.gif';
import omsc2 from '../../assets/images/motion/omsc/OMSC_02.gif';
import omsc3 from '../../assets/images/motion/omsc/OMSC_03.gif';
import omsc4 from '../../assets/images/motion/omsc/OMSC_04.gif';
import omsc5 from '../../assets/images/motion/omsc/OMSC_05.gif';
import omsc6 from '../../assets/images/motion/omsc/OMSC_06.gif';
import omsc7 from '../../assets/images/motion/omsc/OMSC_07.gif';
import omsc8 from '../../assets/images/motion/omsc/OMSC_08.gif';

const Omsc = () => {

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
                            <img className="gif swiper-slide" src={omsc1} alt="" />
                            <img className="gif swiper-slide" src={omsc2} alt="" />
                            <img className="gif swiper-slide" src={omsc3} alt="" />
                            <img className="gif swiper-slide" src={omsc4} alt="" />
                            <img className="gif swiper-slide" src={omsc5} alt="" />
                            <img className="gif swiper-slide" src={omsc6} alt="" />
                            <img className="gif swiper-slide" src={omsc7} alt="" />
                            <img className="gif swiper-slide" src={omsc8} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>One Million Steps Challenge <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">Illustrations by</span><br/>Robbie Greatrex</p>
                                <p><span className="bold">About the project</span><br/>29 animated badges for <a href="https://step.diabetes.org.uk/" target="_blank" rel="noreferrer">Diabetes UK</a>.</p>
                                <p><span className="bold">Produced by</span><br/>Mere Mortals</p>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default Omsc;