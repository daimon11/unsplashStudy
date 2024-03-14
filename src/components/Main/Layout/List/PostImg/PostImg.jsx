import { useState } from 'react';
import style from './PostImg.module.css';
import { Modal } from '../../../../Modal/Modal';

export const PostImg = ({
  props,
  handleLike,
  isLiked,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleclick = e => {
    const target = e.target;
    if (target.classList.contains(style.post)) {
      openModal();
    }
    if (target.classList.contains(style.likeButton)) {
      handleLike(props);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <li
        className={style.post}
        onClick={handleclick}
      >
        <img
          className={style.img}
          src={props.urls.small}
          alt={props.description}
        />
        <button
          className={style.likeButton}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </li>

      {isModalOpen && <Modal props={props} closeModal={closeModal} />

      }
    </>
  );
};
