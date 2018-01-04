import React from 'react'
import VideoListItem from './video_list_item'

//its a function based compoent

const VideoList = (props) => {
  const videoItems = props.videos.map((videos) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoClick}
        key={video.etag}
        video={video} />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
