import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
// import { useCommentsData } from '../../hooks/useCommentsData';


export const Modal = ({ props, closeModal }) => {
  // const { postData, commentsData, loading } = useCommentsData(id);

  console.log('modal', props);

  const loading = false;

  const overlayRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current ||
      target === buttonRef.current ||
      target.closest('.closeIcon')) {
      closeModal();
      console.log('закрыть');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      console.log('закрыть');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {loading ? 'Загрузка...' :
          (<div> <h2 className={style.title}>{props.alt_description}</h2>
            <img className={style.img} src={props.urls.regular} width={400} />
            <div className={style.content}>
            </div>

            <p className={style.author}>{props.user.name}</p>

            <button
              className={style.close}
              ref={buttonRef}
              onClick={handleClick}>
              <CloseIcon />
            </button>

          </div>

          )
        }
      </div>
    </div >,
    document.getElementById('modal-root')
  );
};

Modal.PropTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
