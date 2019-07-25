import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  size:{
    margin: '0 10px'
  },
  sWithColor: {
    margin: '0 10px',
    background: 'rgb(245,0,87)',
    color: '#ffffff'
  }
}))

const Size = (props) => {
  const [size,setSize] = useState('')
  const classes = useStyle()
  return (
    <div className="my-2">
      <h4 className="text-secondary">Size</h4>
      {
        ['XS','S','M','L','XL'].map((i,key) => (
          <Button onClick={e => setSize(i)} key={key} variant="contained" className={i == size ? classes.sWithColor : classes.size}>{i}</Button>
        ))
      }
    </div>
  )
}

export default Size
