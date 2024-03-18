import React, {useState, useEffect} from 'react';
import {getLikes, setLikes} from '../../../../api/likes';
import {usePostsImg} from '../../../../hooks/usePosts';
import style from './List.module.css';
import PostImg from './PostImg';
import {useLocation} from 'react-router-dom';
import {getPhotosAsync} from '../../../../api/images';
import {useDispatch} from 'react-redux';

export const List = () => {
  const dispatch = useDispatch();

  const [posts, loading, postPage] = usePostsImg();

  const [favorites, setFavorites] = useState(getLikes());
  const [postLoading, setPostLoading] = useState(true);
  const [postImg, setPostImg] = useState(posts);
  const [page, setPage] = useState(postPage);
  console.log('List page', page);

  const location = useLocation().pathname.substring(1);

  useEffect(() => {
    if (location) {
      setPostLoading(false);
      setPostImg(favorites);
    } else {
      setPostLoading(loading);
      setPostImg(posts);
    }
  }, [location, favorites, posts, loading]);

  const handleLike = (dataImg) => {
    const isLiked = favorites.some(favorite => favorite.id === dataImg.id);

    const updatedFavorites = isLiked ? favorites.filter(item => item.id !== dataImg.id) :
      [dataImg, ...favorites];

    setFavorites(updatedFavorites);
    setLikes(updatedFavorites);
  };

  useEffect(() => {
    dispatch(getPhotosAsync(page));
  }, [page]);

  const handleClick = () => {
    console.log('handleClick', page);
    setPage(prev => prev + 1);
  };

  console.log('postImg', postImg);

  return postLoading ? 'ЗАГРУЗКА' : (
    <>
      <ul className={style.list}>
        {postImg.map(item => (
          <PostImg
            key={item.id}
            props={item}
            handleLike={handleLike}
            isLiked={favorites.some(favorite => favorite.id === item.id)}
          />
        )
        )}
      </ul>

      {!location && (
        <div className={style.center}>
          <button
            className={style.btn_load}
            onClick={handleClick}>{'Загрузить еще...'}</button>
        </div>
      )}
    </>
  );
};
