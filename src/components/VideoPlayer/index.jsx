import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {
	return (
        <ReactPlayer 
            url={[
                {src: `${props.videoMp4}`, type: 'video/mp4'},
                {src: `${props.videoWebm}`, type: 'video/webm'},
            ]}
            className={props.className}
            playsinline={true} 
            muted={true} 
            playing={true} 
            loop={true} />
	);
}

export default VideoPlayer;