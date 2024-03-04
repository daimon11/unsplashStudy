import { getLikes, setLikes } from '../../../../api/likes';
import { usePostsImg } from '../../../../hooks/usePosts';
import style from './List.module.css';
import PostImg from './PostImg';


export const List = () => {
  const likes = getLikes();

  console.log('likes', likes);

  const [postImg, postLoading] = usePostsImg();

  const handleLike = (photoId) => {
    console.log('handleLike', photoId)

    if (likes.includes(photoId)) {
      likes.filter(item => item !== photoId);
    } else {
      setLikes([...likes, photoId]);
    }
  };

  return postLoading ? 'ЗАГРУЗКА' :
    <>
      <ul className={style.list}>{postImg.map(item => <PostImg
        props={item}
        handleLike={handleLike}
        isLiked={likes.includes(item.id)}
      />)}</ul>

      <div class="center">
        <button className={style.btn_load}>{'Загрузить еще...'}</button>
      </div >
    </>
};

