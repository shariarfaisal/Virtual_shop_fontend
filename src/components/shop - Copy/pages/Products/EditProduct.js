import React,{useState,useEffect,useContext} from 'react'
import ControlledEditor from './ControlledEditor';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';
import link from '../../../link'
import {ShopContext} from '../../context/ShopContext';


const updateProduct = async (id,up,setIsUp) => {
  const res = await Axios.put(`${link}/api/product/${id}`,up);
  setIsUp(true);
  return res;
}

const EditProduct = (props) => {
  const context = useContext(ShopContext);
  const [title,setTitle] = useState(props.title)
  const [category,setCategory] = useState(props.category._id);
  const [price,setPrice] = useState(props.price);
  const blocksFromHtml = htmlToDraft(props.description);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

  const [editorState,setEditorState] = useState(EditorState.createWithContent(contentState))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const up = new FormData();
    // up.append('title',title);
    // up.append('category',category);
    // up.append('price',price);
    // up.append('description',draftToHtml(convertToRaw(editorState.getCurrentContent())))
    const updated = updateProduct(props._id,{title,category,price,description: draftToHtml(convertToRaw(editorState.getCurrentContent()))},context.setIsUp);
  }


  return (
    <div className="col-md-8 my-3">
      <div className="card p-0 border-0 rounded-0">
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            <FormGroup id="title" label="Title" value={title} type="text" set={setTitle}/>
            <FormGroup id="price" label="Price" value={price} type="text" set={setPrice}/>

          <div className="form-group">
            <ControlledEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </div>
          <div className="d-flex">
            <button  type="submit" className="btn btn-sm btn-info ml-auto px-4">update</button>
            <button onClick={e => props.setIsEdit(!props.isEdit)} type="button" className="btn btn-sm btn-danger mx-3 px-4">close</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const FormGroup = ({id,label,type,set,value}) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input required type={type} id={id} onChange={e => set(e.target.value)} className="form-control" value={value} placeholder={label} />
    </div>
  )
}



export default EditProduct
