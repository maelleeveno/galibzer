import React, { Component } from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import './about.scss';

export default class About extends Component {
	render() {

		let newDate = new Date();
		let currentYear = newDate.getFullYear();
		let age = currentYear - 1987;
		let workPeriod = currentYear - 2012;
		console.log(newDate);
		let resumeData = {
			"siteName": "Pacôme Gabrillagues", 
			"aboutFr": "Breton de " + age + " ans. Diplômé de l’ESRA Bretagne en 2012. Evolue dans le motion design et le compositing depuis " + workPeriod + " ans. Sportif, voyageur à vélo.", 
			"aboutEn": age + " years old, native of Brittany. Graduated from ESRA in 2012. Work as a motion designer and CG artist for " + workPeriod + " years. Sport lover, bike traveler.",
			"contact": [
				{
					"name": "mail",
					"link": "mailto:pacome@galibzer.com",
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
				{
					"name": "strava",
					"link": "https://www.strava.com/athletes/18121640",
					"title": "Suivez mes aventures sportives",
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
				<div className="softwares">
					<p>Motion design | Compositing | Director</p>
					<p>AfterEffects | Animate | Photoshop | Illustrator | Premiere</p>
				</div>
			</section>
		);
	}
}
