import youtube_api, { API_KEY } from '../apis/youtube';

export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_SELECTED_VIDEO = 'GET_SELECTED_VIDEO';
export const SAVE_RECENTLY_PLAYED = 'SAVE_RECENTLY_PLAYED';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const getVideos = term => {
  return async function(dispatch) {
    const res = await youtube_api.get('/search', {
      params: {
        key: API_KEY,
        part: 'snippet',
        maxResults: 10,
        q: term
      }
    });
    dispatch({
      type: GET_VIDEOS,
      payload: res.data.items
    });
  };
};

export const getSelectedVideo = video => {
  return {
    type: GET_SELECTED_VIDEO,
    payload: video
  };
};

export const addToRecentlyPlayedVideos = video => {
  console.log(video);
  return {
    type: SAVE_RECENTLY_PLAYED,
    payload: video
  };
};

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  };
};