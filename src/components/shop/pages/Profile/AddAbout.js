import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import ChangeAbout from './ChangeAbout'


const AddAbout = (props) => {
  const [about,setAbout] = useState('');
  const [is,setIs] = useState(false);

  return (
    <div className="my-3">
      {
        !is ? <Button onClick={e => setIs(true)} style={{fontWeight: 'bold'}} className="text-muted">add about <i className="fas fa-plus ml-2 text-muted"></i></Button>: <ChangeAbout about={about} setAbout={setAbout} setIs={setIs}/>
      }
    </div>
  )
}

export default AddAbout
