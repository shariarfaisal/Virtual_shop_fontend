import React from 'react'
import Axios from 'axios';
import link from '../../../link';


const getAddAbout = async (about,setIs,setIsUp) => {
  const res = await Axios.post(`${link}/api/shop/about`,{about})
  setIsUp(true);
  setIs(false);
}

const ChangeAbout = ({about,setAbout,setIs,setIsUp}) => {

  const onSubmitHandler = e => {
    e.preventDefault();
    getAddAbout(about,setIs,setIsUp);
  }

  return (
    <div className="my-3">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={e => setAbout(e.target.value)}
            value={about}
            placeholder="Write something about your property..."
          ></textarea>
        </div>
        <div className="d-flex">
          <button className="btn btn-sm btn-primary px-4" type="submit">save</button>
          <button className="btn btn-sm btn-danger mx-2 px-4" onClick={e => setIs(false)} type="button">close</button>
        </div>
      </form>
    </div>
  )
}

export default ChangeAbout
