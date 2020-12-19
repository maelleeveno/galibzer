import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import './motion.scss';

import hennessy1 from '../../assets/images/motion/hennessy/HENNESSY_1.gif';
import hennessy2 from '../../assets/images/motion/hennessy/HENNESSY_2.gif';
import hennessy3 from '../../assets/images/motion/hennessy/HENNESSY_3.gif';
import hennessy4 from '../../assets/images/motion/hennessy/HENNESSY_4.gif';
import hennessy5 from '../../assets/images/motion/hennessy/HENNESSY_5.gif';

const Hennessy = () => {

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
                            <img className="gif swiper-slide" src={hennessy3} alt="" />
                            <img className="gif swiper-slide" src={hennessy2} alt="" />
                            <img className="gif swiper-slide" src={hennessy1} alt="" />
                            <img className="gif swiper-slide" src={hennessy4} alt="" />
                            <img className="gif swiper-slide" src={hennessy5} alt="" />
                        </Swiper>
                    </Grid.Column>
                    <Grid.Column className="project-desc">
                        <div className="project-presentation">
                            <div className="project-title" onClick={onClick}>Hennessy <Icon name={arrowDir}/></div>
                            <div className={showDesc}>
                                <p><span className="bold">Directed by</span><br/>Pacôme Gabrillagues & Sabine Linères</p>
                                <p><span className="bold">Illustrations by</span><br/>Ugo Gattoni</p>
                                <p><span className="bold">About the project</span><br/>Short animated movie for the Hennessy Maison in Cognac.</p>
                                <p><span className="bold">Produced by</span><br/>General Pop @ BETC</p>
                                <a href="https://vimeo.com/490192494" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

export default Hennessy;