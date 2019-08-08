import React,{useState} from 'react'
import link from '../../../link';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Axios from 'axios';

const ImageHandler = ({image,name}) => {
  const [newImage,setNewImage] = useState('');
  const [original,setOriginal] = useState(image);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const FD = new FormData();
    FD.append('image',newImage);
    const set = await Axios.post(`${link}/api/shop/image`,FD);
    if(set){
      setNewImage('');
      setOriginal(set.data.image);
    }
    console.log(newImage);
  }
  return (
    <StyleImageHandler style={{minHeight: '200px'}} className="bg-light mt-3">
      {original && <img src={`${link}/${original}`} className="card-img-top rounded-0" alt={`${name}`} />}
      <form onSubmit={onSubmitHandler} encType="multipart/form-data">
      {!original && <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            style={{display: 'none'}}
            id="contained-button-file"
            onChange={e => setNewImage(e.target.files[0])}
            type="file"
            required
          />
          <Button variant="contained" component="span">
            <CloudUploadIcon style={{fontSize: '50px',color: '#059ab2'}}/>
          </Button>
          {newImage && <Button type="submit" className="mx-3" variant="contained">
            save
          </Button>}
        </label>
      </div>}
      {original && <div className="overlay d-flex">
        <label htmlFor="icon-button-file">
          <input accept="image/*" onChange={e => setNewImage(e.target.files[0])} style={{display: 'none'}} id="icon-button-file" type="file" />
          <IconButton
            style={{color: '#ffffff'}}
            aria-label="Upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>

        </label>
        {
          newImage &&
          <div className="d-flex ml-auto mt-3 mr-3">
            <button type="submit" className="btn btn-sm btn-light  py-0 mx-2" style={{width: '60px',height: '25px'}}>save</button>
            <button onClick={e => setNewImage('')} type="button" className="btn btn-sm btn-danger py-0 mx-2" style={{width: '60px',height: '25px'}}>close</button>
          </div>
        }
      </div>}
      </form>
    </StyleImageHandler>
  )
}

const StyleImageHandler = styled.div`
  position: relative;

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

`

export default ImageHandler
