import React, { useRef, useState } from 'react';
import './Video.css';

import VideoFooter from './VideoFooter';
import VideoSiderbar from './VideoSiderbar';

const Video = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        // we can use this control to play pause video
        // controls

        // OR, WE CAN USE THIS REF FOR TAP TO PLAY PAUSE
        ref={videoRef}
        onClick={onVideoPress}
        src='https://v16m.tiktokcdn.com/037e0d5cf42e8ee8d28fb4c02dee8210/5f33a91d/video/tos/useast2a/tos-useast2a-ve-0068c004/09b04615ad904904968ab0b6835ba331/?a=1233&br=5350&bt=2675&cr=0&cs=0&dr=0&ds=3&er=&l=2020081008322901011522808208009C75&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am5obzozPHN0dTMzNjczM0ApNjxpNGZkODxoN2UzNWQ3PGdua2tqX25fcy1fLS01MTZzczY2MS42NDIyY180X15jLV86Yw%3D%3D&vl=&vr='></video>{' '}
      <VideoFooter />
      <VideoSiderbar />
    </div>
  );
};

export default Video;
