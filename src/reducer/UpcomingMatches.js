import {
  UPCOMING_MATCHES_LOADING,
  UPCOMING_MATCHES_SUCCESS,
  UPCOMING_MATCHES_FAILURE
} from "../constant/Constants";

const initialState = {
  loading: false,
  data: null,
  error: ""
};

const upcomingMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPCOMING_MATCHES_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPCOMING_MATCHES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ""
      };
    case UPCOMING_MATCHES_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default upcomingMatchesReducer;
