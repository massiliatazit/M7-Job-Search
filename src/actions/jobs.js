import axios from 'axios';
import moment from 'moment';

import { setErrors } from './errors';

export const initiateGetJobs = (data) => {
  return async (dispatch) => {
    try {
      let { description, full_time, location, page } = data;
      description = description ? encodeURIComponent(description) : '';
      location = location ? encodeURIComponent(location) : '';
      full_time = full_time ? '&full_time=true' : '';

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
      }

      const jobs = await axios.get(
        
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}${full_time}${page}`
      );
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );
      return dispatch(setJobs(sortedJobs));
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  jobs
});

export const setLoadMoreJobs = (jobs) => ({
  type: 'LOAD_MORE_JOBS',
  jobs
});