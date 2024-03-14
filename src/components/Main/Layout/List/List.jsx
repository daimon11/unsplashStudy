import React, { useState, useEffect } from 'react';
import { getLikes, setLikes } from '../../../../api/likes';
import { usePostsImg } from '../../../../hooks/usePosts';
import style from './List.module.css';
import PostImg from './PostImg';
import { useLocation } from 'react-router-dom';

export const List = () => {

  const [favorites, setFavorites] = useState(getLikes());
  const [postLoading, setPostLoading] = useState(true);
  const [postImg, setPostImg] = useState([]);

  const location = useLocation().pathname.substring(1);

  const [posts, loading, postPage] = usePostsImg();

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

    const updatedFavorites = isLiked
      ? favorites.filter(item => item.id !== dataImg.id)
      : [dataImg, ...favorites];

    setFavorites(updatedFavorites);
    setLikes(updatedFavorites);
  };

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
        ))}
      </ul>

      {!location && (
        <div className={style.center}>
          <button className={style.btn_load}>{'Загрузить еще...'}</button>
        </div>
      )}
    </>
  );
};