import React,{useState,useEffect} from 'react'
import ControlledEditor from './ControlledEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Axios from 'axios';
import link from '../../../../link'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const postProduct = async (pro,setIsUp) => {
  const res = await Axios.post(`${link}/api/product`,pro);
  if(res) {
    setIsUp(true)
    return true
  }
  return false
}

const CreateProduct = ({isProductAdd,setIsProductAdd,context}) => {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [descountedPrice] = useState('');
  const [image,setImage] = useState('');
  const [editorState,setEditorState] = useState(EditorState.createEmpty())

  const classes = useStyles();
  // const description = ReactHtmlParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  // const description = draftToHtml(convertToRaw(editorState.getCurrentContent()))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }



  const onSubmitHandler = (e) => {
    const pro = new FormData();
    pro.append('title',title);
    pro.append('price',price);
    pro.append('category',category);
    pro.append('image',image);
    pro.append('description',draftToHtml(convertToRaw(editorState.getCurrentContent())));
    e.preventDefault();
    const isUploaded = postProduct(pro,context.setIsUp);
    if(isUploaded) {
      setTitle('');setPrice('');setImage(null);setEditorState(EditorState.createEmpty());
    }
  }

  return (
    <div className="col-12 py-4" style={{borderBottom: '1px solid rgb(235, 235, 235)'}}>
        <div className="card border-0 p-0 m-0">
          <div className="card-body m-0 p-0">
            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
              <div className="d-flex justify-content-center">
                <label htmlFor="contained-button-file">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    onChange={e => setImage(e.target.files[0])}
                    type="file"
                  />
                  <Button variant="contained" component="span" className={classes.button}>
                  <CloudUploadIcon style={{fontSize: '50px',color: '#059ab2'}} className={classes.rightIcon} />
                  </Button>
                </label>
              </div>
              <FormGroup id="title" label="Title" value={title} type="text" set={setTitle}/>
              <FormGroup id="price" label="Price" value={price} type="text" set={setPrice}/>
              <FormSelect categories={context.categories} category={category} setCategory={setCategory}/>
              <div className="form-group">
                <ControlledEditor  editorState={editorState} onEditorStateChange={onEditorStateChange}/>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-sm btn-primary">Save</button>
                <button onClick={e => setIsProductAdd(!isProductAdd)} type="button" className="btn btn-sm btn-danger mx-3">Close</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

const FormSelect = ({categories,category,setCategory}) =>{
  return (
    <div className="form-group">
      <select onChange={e => setCategory(e.target.value)} value={category} id="category" className="form-control">
        <option>Select Category</option>
        {categories.map((e,i) => {
          return <option key={i} value={e._id}>{e.name}</option>
        })}
      </select>
    </div>
  )
}

const FormGroup = ({id,label,type,set,value}) => {
  return(
    <div className="form-group">
      <input required type={type} id={id} onChange={e => set(e.target.value)} className="form-control" value={value} placeholder={label} />
    </div>
  )
}

// const File = (
//   <div className="form-group">
//     <input
//       className="form-control border-0 "
//       type="file"
//       onChange={e => setImage(e.target.files[0])}
//     />
//   </div>
// )

export default CreateProduct
