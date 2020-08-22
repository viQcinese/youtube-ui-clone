import React from 'react'

import more from '../../../../assets/images/feather-icons/more-vertical.svg'
import thumbnail from '../../../../assets/images/thumbnail.webp'

import './style.css'

function VideoCard() {
  return (
    <div className="video-card-container">
      <div className="video">
        <div className="video-thumbnail">
          <img src={thumbnail}/>
          <div className="progress-bar"></div>
          <div className="length">7:55</div>
        </div>
        <div className="video-info">
          <strong>The Office (US) - S09E14 - Vandalism (Deleted Scenes)</strong>  
          <span>Orion Cramer - Deleted Scenes, Bloopers, Extras</span>
          <span>335K  views • 2 months ago</span>
        </div>
      </div>
      <div className="more">
        <img src={more} className="icon"/>
      </div>
    </div>
  )
}

export default VideoCard