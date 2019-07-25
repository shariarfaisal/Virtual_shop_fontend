import React,{useState} from 'react'
import ControlledEditor from './ControlledEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const CreateProduct = ({isProductAdd,setIsProductAdd}) => {
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
    <div className="col-8 my-3">
    <div className="card">
      <div className="card-body">
        <form onSubmit={onSubmitHandler}>
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
            <input
              className="form-control border-0 "
              type="file"
              value=""
            />
          </div>

          <div className="form-group">
            <ControlledEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </div>
          <button type="submit" className="btn btn-sm btn-primary">Submit</button>
          <button onClick={e => setIsProductAdd(!isProductAdd)} type="button" className="btn btn-sm btn-danger mx-3">close</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateProduct
