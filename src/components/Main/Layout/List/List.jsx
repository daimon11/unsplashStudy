import { usePostsImg } from '../../../../hooks/usePosts';
import style from './List.module.css';
import PostImg from './PostImg';


export const List = () => {
  const [postImg, postLoading] = usePostsImg();
  console.log(postImg);


  return postLoading ? 'ЗАГРУЗКА' :
    <>
      <ul className={style.list}>{postImg.map(item => <PostImg props={item} />)}</ul>

      <button>{'Загрузить еще...'}</button>
    </>
};

