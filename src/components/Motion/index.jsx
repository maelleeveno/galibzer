import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
<<<<<<< HEAD
import { Icon } from 'semantic-ui-react';
=======
>>>>>>> 113ec968d6c48eb210688647f58b0c6ffbad9713
import Layout from '../Layout';
import Title from '../Title';
import './motion.scss';
import 'swiper/swiper.scss';

import Hennessy from './hennessy';
import AirFrance from './airfrance';
import Peugeot from './peugeot';
import Orangina from './orangina';
import Leclerc from './leclerc';
import BigInJapan from './biginjapan';
import DeParis from './deparis';
import ChicagoFire from './chicagofire';

const Motion = () => {

<<<<<<< HEAD
	const [state, setState] = useState({ items: [<Hennessy/>, <AirFrance/>] });
	const [extraComponents] = useState([
=======
	const [state, setState] = useState({ items: [<Hennessy/>] });
	const [extraComponents] = useState([
		<AirFrance/>,
>>>>>>> 113ec968d6c48eb210688647f58b0c6ffbad9713
		<BigInJapan/>,
		<Orangina/>,
		<Peugeot/>,
		<DeParis/>,
		<Leclerc/>,
		<ChicagoFire/> 
	]);
	const [count, setCount] = useState(0);
	const [hasMore, setHasMore] = useState(true);
<<<<<<< HEAD
	const fetchMoreData = () => {
		if(state.items.length >= 8 ) {
=======
	
	const fetchMoreData = () => {
		if(state.items.length >=20 ) {
>>>>>>> 113ec968d6c48eb210688647f58b0c6ffbad9713
			setHasMore(false);
			return;
		}
		setTimeout( () => {
			setState({
				items: state.items.concat([extraComponents[count]])
			});
			setCount(count + 1);
		}, 500);
	}

	return (
		<Layout>
			<Title title="Motion | Pacôme Gabrillagues"/>
			<section id="motion">
				<InfiniteScroll
					dataLength={state.items.length}
					next={fetchMoreData}
					hasMore={hasMore}
<<<<<<< HEAD
					loader={<p className="loading"><Icon name="hourglass half"/> Loading more content...</p>}
					endMessage={
						<p className="end-message"><Icon name="check"/> Yay ! That's all for now :)</p>
					}
					pullDownToRefreshThreshold={10}
					initialScrollY
=======
					loader={<p className="loading">Loading...</p>}
					endMessage={
						<p className="end-message">Yay! Nothing more to see for now :)</p>
					}
>>>>>>> 113ec968d6c48eb210688647f58b0c6ffbad9713
					className="no-y-scroll"
				>
					{state.items.map( (i, index) => i)}				
				</InfiniteScroll>
			</section>
		</Layout>
	);
	
}

export default Motion;