import React from 'react'

import VideoCard from './components/VideoCard'

import './style.css'

function VideoList() {
  return (
    <div className="video-list-container">
      <div className="up-next">
        <div className="upper-row">
          <span>Up next</span>
          <div className="autoplay">
            <span>AUTOPLAY</span>
          </div>
        </div>
        <VideoCard />
      </div>
      <div className="related-videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </div>
    </div>
  )
}

export default VideoList