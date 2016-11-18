import React from 'react';

//functional component takes 'props' as an argument
const VideoList = (props) => {
  return (
    // using bootstrap defined in index.html for className
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
