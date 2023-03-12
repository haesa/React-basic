import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../css/Filter.module.css';

export default function Filter({ todos, filter, onFilter }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul className={styles.filter}>
      <li>
        <button
          className={`${styles.button} ${filter === 'All' && styles.check} ${
            darkMode && styles.dark
          }`}
          onClick={onFilter}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${filter === 'Active' && styles.check} ${
            darkMode && styles.dark
          }`}
          onClick={onFilter}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${
            filter === 'Completed' && styles.check
          } ${darkMode && styles.dark}`}
          onClick={onFilter}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
