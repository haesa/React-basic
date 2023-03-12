import { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../css/Header.module.css';
import Filter from './Filter';

export default function Header({ todos, filter, onFilter }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${styles.header} ${darkMode && styles.dark}`}>
      <button
        className={`${styles.darkMode} ${darkMode && styles.dark}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
      <Filter todos={todos} filter={filter} onFilter={onFilter} />
    </div>
  );
}
