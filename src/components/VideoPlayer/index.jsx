import React from 'react';
import ReactPlayer from 'react-player';
import './video.scss';

const VideoPlayer = (props) => {
	return (
        <ReactPlayer 
            url={[
                {src: `${props.videoMp4}`, type: 'video/mp4'},
                {src: `${props.videoWebm}`, type: 'video/webm'},
            ]}
            className="video-player" 
            playsinline={true} 
            muted={true} 
            playing={true} 
            loop={true} 
            width="100%"/>
	);
}

export default VideoPlayer;