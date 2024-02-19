import PropTypes from 'prop-types';
import React from 'react';
import style from './Heading.module.css';
import { Text } from '../../../UI/Text';

export const Heading = ({ text }) => <Text
  As='h1'
  size={22}
  tsize={26}
  center
  className={style.heading}>
  {text}
</Text>;


Heading.PropTypes = {
  text: PropTypes.string,
};
