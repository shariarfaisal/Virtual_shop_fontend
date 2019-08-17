import React,{useState,useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Axios from 'axios';
import link from '../../link';

const getBrands = async (setBrands) => {
  const me = await Axios.get(`${link}/api/customar/me`)
  console.log(me.data);
  setBrands(me.data.follow);
}

const BrandList = (props) => {
  const [brands,setBrands] = useState(null);

  useEffect(() => {
    getBrands(setBrands);
  },[])
  return (
    <List>
      {brands && brands.map((text, index) =>(
        <ListItem button key={index}>
          <a style={{textDecoration: 'none',color: 'black'}} href={`/brand/${text.shop._id}`}>
            <ListItemText primary={text.shop.name} />
          </a>
        </ListItem>
      ))}
    </List>
  )
}

export default BrandList
