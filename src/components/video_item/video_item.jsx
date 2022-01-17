import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, video: {snippet}, onVideoClick, display }) => {
    
    // list타입인지 grid타입인지 구분해서 클래스명 넣어주기
    const displayType = display === 'list' ? styles.list : styles.grid; 

    return (
        // onVideoClick을 클릭하면 선택한 video를 selectedVideo에 넣어서 VideoDetail에서 video를 넘겨받아서 보여줌
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img src={snippet.thumbnails.medium.url} alt='video thumbnail' className={styles.thumbnail}/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;