import React from 'react'
import videoBg from '../assets/video.mp4'

function VideoBackground() {
  return (
    <div className='main' >
        <video src= {videoBg} autoPlay loop muted type="video.mp4">
        </video>
    </div>
  )
}

export default VideoBackground
