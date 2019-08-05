import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setShopToken,setCustomarToken} from './utils/setToken';

const shopToken = localStorage.getItem('virtual_shopkeeper_token');
if(shopToken) setShopToken(shopToken)

const customarToken = localStorage.getItem('virtual_customar_token');
if(customarToken) setCustomarToken(customarToken)


ReactDOM.render(<App />, document.getElementById('root'));
