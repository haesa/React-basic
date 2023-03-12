import React from 'react';
import styles from './filter.module.css';

const Filter = () => (
  <ul className={styles.category}>
    <li className={styles.active}>모두</li>
    <li>실시간</li>
    <li>게임</li>
    <li>음악</li>
    <li>믹스</li>
    <li>뷰티 팁</li>
    <li>만화 영화</li>
    <li>액션 어드벤처 게임</li>
    <li>요리</li>
    <li>최근에 업로드된 동영상</li>
    <li>감상한 동영상</li>
    <li>새로운 맞춤 동영상</li>
  </ul>
);

export default Filter;
