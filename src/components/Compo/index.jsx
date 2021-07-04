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
				<iframe className="youtube-video" title="Compo" width="800" height="329" src="https://www.youtube.com/embed/nIL95lspiyg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<div className="desc">
					<p>AE VFX compositing showreel featuring a compilation of some recent works.</p>
				</div>
			</section>
		</Layout>
	);
}

export default Compo;