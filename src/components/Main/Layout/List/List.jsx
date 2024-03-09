import React, { useState } from 'react';
import { getLikes, setLikes } from '../../../../api/likes';
import { usePostsImg } from '../../../../hooks/usePosts';
import style from './List.module.css';
import PostImg from './PostImg';


export const List = () => {
  const [favorites, setFavorites] = useState(getLikes());
  console.log('favorites', favorites);

  let updateFavorite = [];

  const [postImg, postLoading] = usePostsImg();

  const handleLike = (photoId) => {
    if (favorites.includes(photoId)) {
      console.log('удалить handleLike', photoId);
      updateFavorite = favorites.filter(item => item !== photoId);
      setFavorites(updateFavorite);
      setLikes(updateFavorite);
    } else {
      console.log('добавить handleLike', photoId);
      updateFavorite = [...favorites, photoId];
      setFavorites(updateFavorite);
      setLikes(updateFavorite);
    }
  };

  return postLoading ? 'ЗАГРУЗКА' :
    <>
      <ul className={style.list}>{postImg.map(item => <PostImg
        props={item}
        handleLike={handleLike}
        isLiked={favorites.includes(item.id)}
      />)}</ul>

      <div class="center">
        <button className={style.btn_load}>{'Загрузить еще...'}</button>
      </div >
    </>;
};

