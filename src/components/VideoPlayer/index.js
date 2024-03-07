import {useState} from 'react'

import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
  Input,
} from './styledComponents'

import './index.css'

const VideoPlayer = () => {
  const [videoUrl, setUrl] = useState('')
  return (
    <VideoPlayerContainer>
      <Input
        type="text"
        value={videoUrl}
        onChange={event => setUrl(event.target.value)}
        placeholder="Enter Valid Url"
      />
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        className="video-player"
      />
      <VideoTitle>Big Buck Bunny</VideoTitle>
      <VideoStats>8,100,195 views - May 29, 2008</VideoStats>
      <HorizontalLine />
    </VideoPlayerContainer>
  )
}

export default VideoPlayer
