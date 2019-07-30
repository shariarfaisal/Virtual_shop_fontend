import React,{useState,useEffect,useContext} from 'react'
import ControlledEditor from './ControlledEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {ShopContext} from '../../context/ShopContext';
import Axios from 'axios';
import link from '../../../link'


const postProduct = async (pro,setIsUp) => {
  const res = await Axios.post(`${link}/api/product`,pro);
  if(res) {
    setIsUp(true)
    return true
  }
  return false
}

const CreateProduct = ({catName,isProductAdd,setIsProductAdd}) => {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [descountedPrice] = useState('');
  const [image,setImage] = useState('');
  const [editorState,setEditorState] = useState(EditorState.createEmpty())
  const context = useContext(ShopContext)

  // const description = ReactHtmlParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  // const description = draftToHtml(convertToRaw(editorState.getCurrentContent()))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  useEffect(()=>{
      const cat = context.categories.find(i => {
        return i.name.toLowerCase() == catName
      })
      setCategory(cat._id)
  })


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
    <div className="col-12 my-3">
    <div className="card">
      <div className="card-body">
        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <FormGroup id="title" label="Title" value={title} type="text" set={setTitle}/>
          <FormGroup id="price" label="Price" value={price} type="text" set={setPrice}/>
          <div className="form-group">
            <input
              className="form-control border-0 "
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <ControlledEditor  editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </div>
          <button type="submit" className="btn btn-sm btn-primary">Submit</button>
          <button onClick={e => setIsProductAdd(!isProductAdd)} type="button" className="btn btn-sm btn-danger mx-3">close</button>
        </form>
      </div>
    </div>
    </div>
  )
}

// const FormSelect = ({categories,category}) =>{
//   return (
//     <div className="form-group">
//       <label htmlFor="category">Category</label>
//       <select value={category} id="category" className="form-control">
//         <option>Select Category</option>
//         {categories.map((e,i) => {
//           return <option key={i} value={e._id}>{e.name}</option>
//         })}
//       </select>
//     </div>
//   )
// }

const FormGroup = ({id,label,type,set,value}) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input required type={type} id={id} onChange={e => set(e.target.value)} className="form-control" value={value} placeholder={label} />
    </div>
  )
}

export default CreateProduct
