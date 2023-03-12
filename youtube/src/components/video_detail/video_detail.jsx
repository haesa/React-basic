import React, { useState } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  const {
    id,
    snippet: { channelTitle, description, publishedAt, tags, title },
  } = video;
  const [show, setShow] = useState('less');

  return (
    <section className={styles.detail}>
      <iframe
        type="text/html"
        title="youtube video player"
        width="100%"
        height="720px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {tags && tags.map((tag) => <span key={`${id}_tag`}>{`#${tag}`}</span>)}
      <h2>{title}</h2>
      <div className={styles.algin}>
        <p>{publishedAt}</p>
        <div className={styles.menu}></div>
      </div>
      <br />
      <h3>{channelTitle}</h3>
      <div>
        <pre
          className={`${styles.description} ${show === 'more' && styles.more}`}
        >
          {description}
        </pre>
      </div>
      <button
        onClick={() => (show === 'less' ? setShow('more') : setShow('less'))}
        className={styles.show}
      >
        {show === 'more' ? '간략히' : '더보기'}
      </button>
    </section>
  );
};

export default VideoDetail;
