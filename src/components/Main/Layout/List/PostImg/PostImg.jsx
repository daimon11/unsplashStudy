import style from './PostImg.module.css';

export const PostImg = ({ props, handleLike, isLiked }) => {

  return (
    <li
      className={style.post}
      id={props.id}>
      <img
        className={style.img}
        src={props.urls.small}
        alt={props.description} />
      <button
        className={style.likeButton}
        onClick={() => handleLike(props)}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </li>
  );
};
