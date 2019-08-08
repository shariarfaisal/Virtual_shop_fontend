import React,{useState} from 'react'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyle = makeStyles(theme => ({
  star:{
    color: 'orange'
  },
  starBorder:{
    color: 'gray'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}))

const AddReview = (props) => {
  const classes = useStyle()
  const [star,setStar] = useState(0);

  return (
    <div id="add-review" className="pl-5">
      <h3>Add a review</h3>
      <div className="col-md-6">
        <form>
          <TextField
            id="filled-nickname"
            label="Choose a nickname"
            className={classes.textField}
            margin="dense"
            variant="filled"
          />
          <TextField
            id="filled-review"
            label="Your review"
            className={classes.textField}
            margin="dense"
            variant="filled"
          />
        <FormHelperText className="ml-4">Your review must be at least 50 characters <a href="">Full review guidlines</a></FormHelperText>

          <div className="mb-4 ml-2 mt-3">
            {
              [1,2,3,4,5].map((i,key) => (
                star >= i ? <Star key={key} onClick={e => setStar(i)} className={classes.star}/> : <StarBorder key={key} onClick={e => setStar(i)} className={classes.starBorder}/>
              ))
            }
          </div>
          <button className="btn btn-sm btn-primary" type="button">submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddReview
