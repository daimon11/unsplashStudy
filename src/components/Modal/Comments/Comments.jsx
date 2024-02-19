import style from './Comments.module.css';
import { Text } from '../../../UI/Text';
import PropTypes from 'prop-types';
import { formateDate } from '../../../utils/formateDate';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {comments && comments.map((item) =>
    (<li key={item.id} className={style.item}>
      <Text
        As='h3'
        className={style.author}
        size={18}
        tsize={22}>{item.author}</Text>
      <Text
        As='p'
        className={style.comment}
        size={14}
        tsize={18}>{item.body}</Text>
      <time
        className={style.date}
        dateTime={new Date().toISOString()}>
        {formateDate(item.created * 1000)}
      </time>
    </li>))}

  </ul>
);

Comments.propTypes = {
  commentsData: PropTypes.array,
};
