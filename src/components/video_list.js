import React from 'react';

import VideoListItem from './video_list_item';

//functional component takes 'props' as an argument
const VideoList = (props) => {
  // get list of videos and store in video items
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    // using bootstrap defined in index.html for className
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
