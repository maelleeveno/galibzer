import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import orangina from '../../assets/images/motion/orangina/ORANGINA.gif';

const Orangina = () => {

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
                            <img className="gif swiper-slide" src={orangina} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Orangina <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">Produced by</span><br/>General Pop @ BETC</p>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default Orangina;