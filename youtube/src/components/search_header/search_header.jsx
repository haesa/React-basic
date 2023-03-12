import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = (event) => {
    onSearch(event, inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.start}>
        <button className={styles.bar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <a href="." className={styles.logo}>
          <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
          <h1 className={styles.title}>YouTube</h1>
        </a>
      </div>
      <form className={styles.center} onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="검색"
        />
        <button className={styles.button}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className={styles.end}>
        <button className={styles.login}>
          <span className={styles.icon}>
            <i className="fa-solid fa-user"></i>
          </span>
          <span>로그인</span>
        </button>
      </div>
    </header>
  );
});

export default SearchHeader;
