import {
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR
} from "../api/images";


const initialState = {
  loading: true,
  photos: [],
  error: null,
  page: 0,
};

export const photosReducer = (state = initialState, action) => {

  console.log('!!!!!! state', state, 'action', action.data);

  switch (action.type) {
    case GET_PHOTOS_START:
      return {
        ...state,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.data,
        error: '',
        page: state.page + 1,
      };
    case GET_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
