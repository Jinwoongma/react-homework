import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Week01 from './Week01';
import Week02 from './Week02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Week01 />
    {/* <Week02 /> */}
  </React.StrictMode>
);
