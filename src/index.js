import React from 'react';
import ReactDOM from 'react-dom';

import BtcRate from './components/Btc-Rate';
import SearchBar from './components/predictions';

const API_KEY = '';

const App = () => {
      return (
      <div>
        <button> Hello</button>
        <button> Hi</button>
        <BtcRate />
        <SearchBar />
      </div>
    );
 }

ReactDOM.render(<App />, document.querySelector('.container'));
