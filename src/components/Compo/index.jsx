import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import './compo.scss';

const Compo = () => {
	
	return (
		<Layout>
			<Title title="Compo | Pacôme Gabrillagues"/>
			<section id="compo">
				{/* <div className="youtube_player" videoid="nIL95lspiyg" width="100%" height="329"></div> */}
				<h2>Showreel FX / Compositing</h2>
				<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/nIL95lspiyg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<div className="desc">
					<p>AE VFX compositing showreel featuring a compilation of some recent works.</p>
				</div>
				<div class="other-works">
					<h2><strong>Some other works by chronological order</strong></h2>
					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/ImlsizZPDq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>Michelin EV - General Pop</p>
					</div>
					
					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/YWIkXXF-WSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>Poulain - Blacktool</p>
					</div>

					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/Dw08P5P3E6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>MAC - Firm studio</p>
					</div>

					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/f4dPKOUFPJU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>TCL - General Pop</p>
					</div>

					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/0IjRaqd2MD8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>YSL x Kravitz - General Pop</p>
					</div>

					<div class="other-work-item">
						<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/REXkFkfLYec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<p>Lacoste x Peanuts - General Pop</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Compo;