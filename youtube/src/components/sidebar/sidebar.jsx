import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = ({ display }) => {
  // const lists = [
  //   { icon: 'fa-solid fa-house', name: '홈' },
  //   { icon: 'fa-solid fa-compass', name: '탐색' },
  //   { icon: 'fa-solid fa-box-archive', name: '구독' },
  // ];

  return (
    <ul className={`${styles.sidebar} ${display && styles.select}`}>
      <li className={`${styles.menu_item} ${styles.active}`}>
        <i className="fa-solid fa-house"></i>
        <p>홈</p>
      </li>
      <li className={styles.menu_item}>
        <i className="fa-solid fa-compass"></i>
        <p>탐색</p>
      </li>
      <li className={styles.menu_item}>
        <i className="fa-solid fa-box-archive"></i>
        <p>구독</p>
      </li>
    </ul>
  );
};

export default Sidebar;
