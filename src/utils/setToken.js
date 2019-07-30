import axios from 'axios';

export const setShopToken = (token) => {
  if(token) {
    axios.defaults.headers.common['virtual_shopkeeper_token'] = token
  }
  else{
    axios.defaults.headers.common['virtual_shopkeeper_token'] = ''
  }
}
