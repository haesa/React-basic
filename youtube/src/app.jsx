import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import Sidebar from './components/sidebar/sidebar';
import VideoDetail from './components/video_detail/video_detail';
import Filter from './components/filter/filter';
import VideoList from './components/video_list/video_list';
// import popularList from './popular.json';
// import searchList from './search.json';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => setSelectedVideo(video);

  const search = useCallback(
    (event, query) => {
      event.preventDefault();
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section
        className={`${styles.content} ${selectedVideo && styles.select}`}
      >
        {selectedVideo ? (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        ) : (
          <div className={styles.sidebar}>
            <Sidebar display={selectedVideo} />
          </div>
        )}
        <div className={`${styles.right} ${selectedVideo && styles.select}`}>
          <div className={`${styles.filter} ${selectedVideo && styles.select}`}>
            <Filter />
          </div>
          <div className={`${styles.list} ${selectedVideo && styles.select}`}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
