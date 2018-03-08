import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Card from './Card.js'
import 'tachyons';

ReactDOM.render(
    <Card />, document.getElementById('root')
);

registerServiceWorker();
