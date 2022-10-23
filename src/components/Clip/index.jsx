import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Icon } from 'semantic-ui-react';
import Layout from '../Layout';
import Title from '../Title';
import './clip.scss';
import 'react-multi-carousel/lib/styles.css';

import Noko from './noko';
import Kaviar from './kaviar';
import Maxis from './maxis';
import Dusty from './dusty';

const Clip = () => {

	const [state, setState] = useState({ items: [<Noko/>, <Kaviar/>, <Maxis/>] });
	const [extraComponents] = useState([
		<Dusty/>
	]);
	const [count, setCount] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const fetchMoreData = () => {
		if(state.items.length >= 4 ) {
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
			<Title title="Clip | Pacôme Gabrillagues"/>
			<section id="clip">
			<InfiniteScroll
					dataLength={state.items.length}
					next={fetchMoreData}
					hasMore={hasMore}
					loader={<p className="loading"><Icon name="hourglass half"/> Loading more content...</p>}
					endMessage={
						<p className="end-message"><Icon name="check"/> Yay ! That's it for now :)</p>
					}
					className="no-y-scroll"
				>
					{state.items.map( (i, index) => i)}				
				</InfiniteScroll>
			</section>
		</Layout>
	);
}

export default Clip;