import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params : { key: 'AIzaSyBLPcQr0diW6r7J52-G1_JwAEf23uYr39g' }
});


const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
