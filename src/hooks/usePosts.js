import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPhotosAsync } from '../api/images';

export function usePostsImg(page = 1) {
  console.log('usePostsImg', page);
  const dispatch = useDispatch();

  const postImg = useSelector(state => state.photosReducer.photos);
  const postLoading = useSelector(state => state.photosReducer.loading);

  console.log('usePostsImg', postImg, postLoading)

  useEffect(() => {
    dispatch(getPhotosAsync(page));
  }, []);

  return [postImg, postLoading];
}
