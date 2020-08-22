import React from 'react'

import Comment from './components/Comment'

import avatar from '../../assets/images/avatar.jpg'
import filter from '../../assets/images/feather-icons/filter.svg'

import './style.css'

function Comments() {
  return (
    <div className="comments-container">
      <div className="comments-info">
        <span>397 Comments</span>
        <div className="sort">
          <img src={filter} className="icon"/>
          <span>SORT BY</span>
        </div>
      </div>

      <div className="add-comment">
        <img src={avatar}/>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Add a public comment..."/>
          </div>
          <div className="buttons-container">
            <button className="cancel-button">CANCEL</button>
            <button className="comment-button">COMMENT</button>
          </div>
        </form>
      </div>

      <div className="comments-list">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}

export default Comments