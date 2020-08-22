import React from 'react'

import PageHeader from '../../components/PageHeader'
import VideoDisplay from '../../components/VideoDisplay'
import VideoInfo from '../../components/VideoInfo'
import Comments from '../../components/Comments'
import VideoList from '../../components/VideoList'

import './style.css'

function Home() {
  return (
    <div id="home-page">
      <PageHeader />
      <main id="main-component">
        <VideoDisplay/>
        <VideoInfo />
        <VideoList />
        <Comments />
      </main>
    </div>
  )
}

export default Home