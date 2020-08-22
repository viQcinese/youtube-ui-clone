import React from 'react'

import video from '../../../../assets/images/feather-icons/video.svg'

import './style.css'

function AddVideoMenu() {
  return (
    <div className="add-video-menu">
      <img src={video} className="icon"/>
    </div>
  )
}

export default AddVideoMenu