import React, { useEffect } from 'react'

import video from '../../../../assets/images/feather-icons/video.svg'
import globe from '../../../../assets/images/feather-icons/globe.svg'
import upload from '../../../../assets/images/feather-icons/upload.svg'

import './style.css'

function AddVideoMenu() {

  useEffect(() => {
    document.addEventListener('click', e => {
      const addVideoDropDown = document.querySelector(".add-video-menu .drop-down");
      const addVideoAfter = document.querySelector(".add-video-menu .after");

      if (addVideoDropDown.style.display !== "none") {
        addVideoDropDown.style.display = "none"
        addVideoAfter.style.display = "flex"
      } else {
        if (e.target.id === "add-video-icon") {
          addVideoDropDown.style.display = "flex"
          addVideoAfter.style.display = "none"
        }
      }
    })
  }, [])

  return (
    <div className="add-video-menu">
      <img src={video} className="icon" id="add-video-icon"/>
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