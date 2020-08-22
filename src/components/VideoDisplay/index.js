import React from 'react'

import video from '../../assets/videos/ballet.mp4'

import './style.css'

function VideoDisplay() {
  return (
    <div className="video-display-container">
      <video 
        src={video}
        controls
      >

      </video>
    </div>
  )
}

export default VideoDisplay