import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Icon } from 'semantic-ui-react';
import Layout from '../Layout';
import Title from '../Title';
import './motion.scss';
import 'swiper/swiper.scss';

import Hennessy from './hennessy';
import Perso from './perso';
import Omsc from './omsc';
import AirFrance from './airfrance';
import Peugeot from './peugeot';
import Orangina from './orangina';
import Leclerc from './leclerc';
import BigInJapan from './biginjapan';
import DeParis from './deparis';
import ChicagoFire from './chicagofire';

const Motion = () => {

	const [state, setState] = useState({ items: [<Hennessy/>, <Perso/>] });
	const [extraComponents] = useState([
		<Omsc/>,
		<AirFrance/>,
		<BigInJapan/>,
		<Orangina/>,
		<Peugeot/>,
		<DeParis/>,
		<Leclerc/>,
		<ChicagoFire/> 
	]);
	const [count, setCount] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const fetchMoreData = () => {
		if(state.items.length >= 8 ) {
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
					loader={<p className="loading"><Icon name="hourglass half"/> Loading more content...</p>}
					endMessage={
						<p className="end-message"><Icon name="check"/> Yay ! That's it for now :)</p>
					}
					pullDownToRefreshThreshold={10}
					initialScrollY
					className="no-y-scroll"
				>
					{state.items.map( (i, index) => i)}				
				</InfiniteScroll>
			</section>
		</Layout>
	);
	
}

export default Motion;