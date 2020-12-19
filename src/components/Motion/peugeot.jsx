import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import peugeot1 from '../../assets/images/motion/peugeot/PEUGEOT_01.gif';
import peugeot2 from '../../assets/images/motion/peugeot/PEUGEOT_02.gif';
import peugeot3 from '../../assets/images/motion/peugeot/PEUGEOT_03.gif';

const Peugeot = () => {

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
                            <img className="gif swiper-slide" src={peugeot1} alt="" />
                            <img className="gif swiper-slide" src={peugeot2} alt="" />
                            <img className="gif swiper-slide" src={peugeot3} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Peugeot <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">About the project</span><br/>Motion graphics for Peugeot commercials.</p>
                                <p><span className="bold">Produced by</span><br/>General Pop @ BETC</p>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default Peugeot;