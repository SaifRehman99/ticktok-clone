import React from 'react';

import './VideoSiderbar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSiderbar = () => {
  return (
    <div className='VideoSiderbar'>
      <div className='videoSidebar__button'>
        <FavoriteIcon fontSize='large' />
        <p>300.76k</p>
      </div>
      <div className='videoSidebar__button'>
        <MessageIcon fontSize='large' />
        <p>45.1K</p>
      </div>
      <div className='videoSidebar__button'>
        <ShareIcon fontSize='large' />
        <p>10k</p>
      </div>
    </div>
  );
};

export default VideoSiderbar;
