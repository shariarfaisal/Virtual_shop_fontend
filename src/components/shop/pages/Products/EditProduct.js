import React,{useState} from 'react'
import ControlledEditor from './ControlledEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const EditProduct = (props) => {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [descountedPrice] = useState('');
  const [image,setImage] = useState('');
  const [editorState,setEditorState] = useState(EditorState.createEmpty())
  const description = ReactHtmlParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log();
  }

  return (
    <div className="col-md-8 my-3">
      <div className="card p-0 border-0 rounded-0">
        <div className="card-body">
          <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              id="title"
              type="text"
              value=""
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control" value="">
              <option>Select Category</option>
              <option value="category">category</option>
              <option value="category">category</option>
              <option value="category">category</option>
              <option value="category">category</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              id="price"
              type="text"
              value=""
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="discountedPrice">Price</label>
            <input
              className="form-control"
              id="discountedPrice"
              type="text"
              value=""
              placeholder="Discounted Price"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control border-0 "
              type="file"
              value=""
            />
          </div>
          <div className="form-group">
            <ControlledEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </div>
          <div className="d-flex">
            <button  type="button" className="btn btn-sm btn-info ml-auto px-4">update</button>
            <button onClick={e => props.setIsEdit(!props.isEdit)} type="button" className="btn btn-sm btn-danger mx-3 px-4">close</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
