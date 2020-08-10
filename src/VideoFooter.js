import React from 'react';
import './videoFooter.css';

import Ticker from 'react-ticker';

import MusicNoteIcon from '@material-ui/icons/MusicNote';

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@justmaiko</h3>
        <p>THANKYOU GUYS FOR 20M</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />
          <Ticker mode='smooth' speed={5}>
            {({ index }) => (
              <>
                <p>Dream Girl - Ir Sais</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className='videoFooter__logo' src='https://static.thenounproject.com/png/934821-200.png' />
    </div>
  );
};

export default VideoFooter;
