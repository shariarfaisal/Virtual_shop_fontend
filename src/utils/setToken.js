import axios from 'axios';

export const setShopToken = (token) => {
  if(token) {
    axios.defaults.headers.common['virtual_shopkeeper_token'] = token
  }
  else{
    axios.defaults.headers.common['virtual_shopkeeper_token'] = ''
  }
}

export const setCustomarToken = (token) => {
  if(token) {
    axios.defaults.headers.common['virtual_customar_token'] = token
    if(localStorage.getItem('virtual_search')){
      axios.defaults.headers.common['virtual_search'] = localStorage.getItem('virtual_search')
    }  
  }
  else{
    axios.defaults.headers.common['virtual_customar_token'] = ''
  }
}
