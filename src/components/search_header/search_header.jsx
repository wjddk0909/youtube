import styles from './search_header.module.css';
import { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = event => {
        if(event.key === 'Enter'){
            handleSearch(); 
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="./images/youtube_icon.png" alt="youtube logo"/>
                {/* <h1 className={styles.title}>Youtube</h1> */}
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder='검색어를 입력하세요!' onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="./images/search_icon.png" alt='검색'/>
            </button>
        </header>
    );
};

export default SearchHeader;