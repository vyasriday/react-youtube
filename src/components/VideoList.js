import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

const VideoList = ({ videos, getSelectedVideo }) => {
  return (
    <div>
      {videos.map(video => (
        <VideoItem
          video={video}
          key={video.id.videoId || video.id.playlistId}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoList);
