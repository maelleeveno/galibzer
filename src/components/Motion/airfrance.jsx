import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import VideoPlayer from '../VideoPlayer';
import './motion.scss';

import af1Mp4 from '../../assets/images/motion/air-france/AIRFRANCE_1.mp4';
import af2Mp4 from '../../assets/images/motion/air-france/AIRFRANCE_2.mp4';
import af3Mp4 from '../../assets/images/motion/air-france/AIRFRANCE_3.mp4';
import af4Mp4 from '../../assets/images/motion/air-france/AIRFRANCE_4.mp4';

import af1Webm from '../../assets/images/motion/air-france/AIRFRANCE_1.mp4';
import af2Webm from '../../assets/images/motion/air-france/AIRFRANCE_2.mp4';
import af3Webm from '../../assets/images/motion/air-france/AIRFRANCE_3.mp4';
import af4Webm from '../../assets/images/motion/air-france/AIRFRANCE_4.mp4';

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
        rebuildOnUpdate: true,
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
                        <Swiper {...params} shouldSwiperUpdate>
                            <VideoPlayer className="gif swiper-slide" videoMp4={af1Mp4} videoWebm={af1Webm} />
                            <VideoPlayer className="gif swiper-slide" videoMp4={af2Mp4} videoWebm={af2Webm} />
                            <VideoPlayer className="gif swiper-slide" videoMp4={af3Mp4} videoWebm={af3Webm} />
                            <VideoPlayer className="gif swiper-slide" videoMp4={af4Mp4} videoWebm={af4Webm} />
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