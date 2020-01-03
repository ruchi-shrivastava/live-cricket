import{ UPCOMING_MATCHES_LOADING,
      UPCOMING_MATCHES_SUCCESS,
      UPCOMING_MATCHES_FAILURE
    } from '../constant/Constants'

import axios from 'axios';

export const requestUpcomingMatches = (payload) => (dispatch) =>  {
    dispatch ({ type: UPCOMING_MATCHES_LOADING })
    axios.post('http://cricapi.com/api/matchCalendar', payload)
    .then (data => dispatch ({ type: UPCOMING_MATCHES_SUCCESS, payload: data}))
    .catch (error => dispatch ({ type: UPCOMING_MATCHES_FAILURE, payload: error }))
}

