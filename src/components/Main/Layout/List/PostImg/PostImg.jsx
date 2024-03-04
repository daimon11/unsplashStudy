import React, { useState } from 'react';
import style from './PostImg.module.css';

export const PostImg = ({ props }) => {

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <li className={style.post} id={props.id}>
      {/* img перписать на компонент */}
      <img
        className={style.img}
        src={props.urls.small}
        alt={props.description} />

      <button className={style.likeButton} onClick={handleLike}>
        {liked ? '❤️' : '🤍'}
      </button>

    </li >
  );
}