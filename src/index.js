import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Page from './Page.js'
import Navbar from './Navbar.js';
import 'tachyons';

ReactDOM.render(
    <div>
        <Navbar />
        <Page />
    </div>, document.getElementById('root')
);

registerServiceWorker();
