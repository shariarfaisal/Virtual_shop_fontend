import React,{useState} from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const menuList = [
  {title: 'Item One',items: [{link: '/',name: 'inside item one'},{link: '/',name: 'inside item two'},{link: '/',name: 'inside item three'}]},
]

const MenuItem = ({title,items,itemNo}) => {
  return (
    <div className="list-group-item list-group-item-action rounded-0 bg-dark text-info text-capitalize">
      <h4 data-parent="#parent-collapse" data-toggle="collapse" data-target={`#collapse${itemNo}`} aria-expanded="true">item one</h4>
      <ul id={`collapse${itemNo}`} className="list-group collapse" >
        {
          items.map((i,key) => {
            return <li className="list-group-item list-group-item-action bg-secondary rounded-0">
              <a className="text-light" href={i.link}>{i.name}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

// const CreateCategory = () => (
//   <div className="bg-secondary p-3">
//     <div className="input-group">
//       <input className="form-control" type="text" value="" placeholder="Create category" />
//       <div className="input-group-append">
//         <button type="submit" className="btn" name="button">add</button>
//       </div>
//     </div>
//   </div>
// )

// const CreateSubCategory = () => (
//   <div className="bg-secondary p-3">
//     <div className="form-group">
//       <select className="form-control" id="exampleFormControlSelect1">
//         <option>Select Category</option>
//         <option>Electric</option>
//       </select>
//     </div>
//     <div className="input-group">
//       <input className="form-control" type="text" value="" placeholder="Create subcategory" />
//       <div className="input-group-append">
//         <button type="submit" className="btn" name="button">add</button>
//       </div>
//     </div>
//   </div>
// )

// const Top = () => (
//   <div className=" mx-4 py-3">
//     <Fab title="Add Category" onClick={e => setIsCatAdd(!isAddCat)} color="primary" aria-label="Add">
//       <AddIcon />
//     </Fab>
//     <Fab title="Add Subcategory" style={{width: '40px',height: '40px',marginLeft: '20px'}} onClick={e => setIsCatAdd(!isAddCat)} color="primary" aria-label="Add">
//       <AddIcon />
//     </Fab>
//   </div>
// )


const Sidebar = (props) => {
  // const [isAddCat,setIsCatAdd] = useState(true)
  return (
    <SidebarStyling id="shop-sidebar" className="bg-dark text-light">
      <div className="bg-secondary text-center">
          <h3 className="py-3">Menubar</h3>
      </div>
      <div id="parent-collapse" className="list-group">
        {menuList.map((i,key) => <MenuItem key={key} {...i} itemNo={key}/>)}
      </div>
    </SidebarStyling>
  )
}

const SidebarStyling = styled.div`


`

export default Sidebar
