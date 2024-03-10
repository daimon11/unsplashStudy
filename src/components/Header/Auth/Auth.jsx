import style from './Auth.module.css';
import { AuthLogo } from './AuthLogo/AuthLogo';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { delToken } from '../../../api/token';

export const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.tokenReducer.token);

  const logOut = () => {
    console.log('выходим');
    delToken();
    dispatch(deleteToken());
  };

  console.log('auth', auth);

  return (<div className={style.button}>
    {auth.username ?
      <div className={style.user_wrapper}>
        <Text>
          {auth.username}
        </Text>
        <img
          src={'https://i.ytimg.com/vi/HUKluokvPmE/hqdefault.jpg'}
          className={style.img} />
        <button
          className={style.btn_logout}
          onClick={logOut}>выйти</button>
      </div> :
      <Text As='a' href={urlAuth} className={style.button}>
        <AuthLogo></AuthLogo>
      </Text>
    }
  </div>);
};
