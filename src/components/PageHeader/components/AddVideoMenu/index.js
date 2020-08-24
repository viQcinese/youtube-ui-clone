import React, { useEffect } from 'react'

import video from '../../../../assets/images/feather-icons/video.svg'
import globe from '../../../../assets/images/feather-icons/globe.svg'
import upload from '../../../../assets/images/feather-icons/upload.svg'

import './style.css'

function AddVideoMenu() {

  useEffect(() => {
    document.addEventListener('click', e => {
      const dropDown = document.querySelector(".add-video-menu .drop-down");
      const after = document.querySelector(".add-video-menu .after");

      if (dropDown.style.display !== "none") {
        dropDown.style.display = "none"
        after.style.display = "flex"
      } else {
        e.target.id === "add-video"
          ? dropDown.style.display = "flex"
          : dropDown.style.display = "none"
        after.style.display = "none"
      }
    })
  }, [])

  return (
    <div className="add-video-menu">
      <img src={video} className="icon" id="add-video"/>
      <div className="after">
        Create a video or post
      </div>
      <div className="drop-down">
        <div className="upload-video">
          <img src={upload} className="icon" />
          <span>Upload video</span>
        </div>
        <div className="go-live">
          <img src={globe} className="icon"/>
          <span>Go live</span>
        </div>
      </div>
    </div>
  )
}

export default AddVideoMenu