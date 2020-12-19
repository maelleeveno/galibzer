import React, { Component } from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import './about.scss';

export default class About extends Component {
	render() {

		let resumeData = {
			"siteName": "Pacôme Gabrillagues", 
			"aboutFr": "33 ans, originaire de Bretagne et parisien d’adoption. Diplômé de l’ESRA Bretagne en 2012. Évolue dans le motion design et le compositing depuis 8 ans à Paris. Sportif, voyageur à vélo.", 
			"aboutEn": "33 years old, native of Brittany and Parisian by adoption. Graduated from ESRA in 2012. Work as a motion designer and CG artist for 8 years in Paris. Sport lover, bike traveler.",
			"contact": [
				{
					"name": "mail",
					"link": "mailto:pacomegabrillagues@gmail.com",
					"title": "Contactez moi par mail",
				},
				{
					"name": "linkedin",
					"link": "https://fr.linkedin.com/in/pacome",
					"title": "Visitez mon profil LinkedIn",
				},
				{
					"name": "instagram",
					"link": "https://instagram.com/galibzer",
					"title": "Suivez moi sur Instagram",
				},
			],
		}
		
		return (
			<section id="about">
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
							<div className="section-title fr">SALUT !</div>
							<div className="description fr">{ resumeData.aboutFr }</div>
						</Grid.Column>
						<Grid.Column>
							<div className="section-title en">HELLO !</div>
							<div className="description en">{ resumeData.aboutEn }</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<div className="socials">
					<ul>
						{ 
							resumeData.contact && resumeData.contact.map( (item) => {
								return(
									<a href={ item.link } title={ item.title } target="_blank" rel="noreferrer"><li><Icon name={ item.name } /></li></a>
								)
							})
						}
					</ul>
				</div>
				<div class="softwares">
					<p>Motion design | Compositing | Director</p>
					<p>AfterEffect | Photoshop | Illustrator | Premiere</p>
				</div>
			</section>
		);
	}
}
