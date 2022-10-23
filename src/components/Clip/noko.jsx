import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';

import noko1 from '../../assets/images/clip/noko/NOKO_1.gif';
import noko2 from '../../assets/images/clip/noko/NOKO_2.gif';
import noko3 from '../../assets/images/clip/noko/NOKO_3.gif';
import noko4 from '../../assets/images/clip/noko/NOKO_4.gif';
import noko5 from '../../assets/images/clip/noko/NOKO_5.gif';

const Kaviar = () => {

	const params = {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		loop: true,
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
        rebuildOnUpdate: true,
        shouldSwiperUpdate: true,
        observer: true,
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
							<img className="gif swiper-slide" src={noko1} alt="" />
							<img className="gif swiper-slide" src={noko2} alt="" />
							<img className="gif swiper-slide" src={noko3} alt="" />
							<img className="gif swiper-slide" src={noko4} alt="" />
							<img className="gif swiper-slide" src={noko5} alt="" />
						</Swiper>
					</Grid.Column>
					<Grid.Column className="project-desc">
						<div className="project-presentation">
							<div className="project-title" onClick={onClick}>Mosadi Wa Mosotho <Icon name={arrowDir}/></div>
							<div className={showDesc}>
								<p><span className="bold">Performed by</span><br/>De Noko (KasbaH remix)</p>
								<p><span className="bold">Directed by</span><br/>Pacôme Gabrillagues</p>
								<p><span className="bold">Produced by</span><br/><a href="https://radiochiguiro.com/" title="Radio Chiguiro">Radio Chiguiro Records</a></p>
								<a href="https://youtu.be/3OSW5Pn391A" target="_blank" rel="noreferrer"><p className="view-more"><Icon name="youtube"/> View more</p></a>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
    );
}

export default Kaviar;