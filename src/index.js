import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setShopToken} from './utils/setToken';

const shopToken = localStorage.getItem('virtual_shopkeeper_token');
if(shopToken) setShopToken(shopToken)


ReactDOM.render(<App />, document.getElementById('root'));
