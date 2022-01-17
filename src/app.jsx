import { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]); // 비디오 객체 넣기
  const [selectedVideo, setSelectedVideo] = useState(null); // 선택된 비디오 저장

  // 비디오 리스트에서 비디오 클릭하면 클릭한 비디오 selectedVideo에 넣어주는 함수
  const selectVideo = video => {
    setSelectedVideo(video)
  }

  /* 
    useCallback
    search() 호출하면 검색어 전달 -> 기존의 selectedVideo는 초기화 ->  youtube에 search함수를 검색어를 넣어서 호출하고 -> then(검색한 결과를 => setVideos에 배열로 넣어줌) -> state값이 바뀌었으니 갱신이 됨
  */
  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube.search(query).then(videos => setVideos(videos));
    },
    [youtube] // [youtube] youtube값이 바뀌면 리렌더링
  );

  // 컴포넌트가 마운트 될때 실행 : 처음에는 mostPopular를 보여주기
  useEffect( () => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo}/>
            </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
            />
        </div>
      </section>
    </div>
  );
}

export default App;
