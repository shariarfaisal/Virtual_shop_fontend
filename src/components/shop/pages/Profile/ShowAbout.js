import React,{useState} from 'react'
import styled from 'styled-components';
import ChangeAbout from './ChangeAbout';


const ShowAbout = ({about,setIsUp}) => {
  const [is,setIs] = useState(false);
  const [newAbout,setAbout] = useState(about);

  return (
    !is ? <AboutStyle className="bg-light my-2 p-2 text-muted">
      <small onClick={e => setIs(true)} className="text-muted">edit</small>
      {about}
    </AboutStyle> : <ChangeAbout setIsUp={setIsUp} about={newAbout} setAbout={setAbout} setIs={setIs} />
  )
}

const AboutStyle = styled.div`
  position: relative;

  small{
    position: absolute;
    top: 5px;
    padding: 0 10px;
    border-radius: 100px;
    right: 10px;
    cursor: pointer;
    background: #e9e9e9;
    font-weight: bold;
  }
  small:hover{
    color: #000000 !important;
  }

`
export default ShowAbout
