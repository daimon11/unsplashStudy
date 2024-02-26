const GET_PHOTOS = 'UPDATE_TOKEN';

const initialState = {
  loading: true,
  images: [],
};

export const getPhotos = token => ({
  type: GET_PHOTOS,
  token,
});