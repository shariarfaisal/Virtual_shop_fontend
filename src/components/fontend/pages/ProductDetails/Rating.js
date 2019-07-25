import React from 'react'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  star:{
    color: 'orange'
  },
  starBorder:{
    color: 'gray'
  }
}))

const Rating = ({rating}) => {
  const classes = useStyle()
  return (
    <div className="star-rating my-3">
      {
        [1,2,3,4,5].map((i,key) => (
          rating > i ? <Star className={classes.star}/> : <StarBorder className={classes.starBorder}/>
        ))
      }
    </div>
  )
}

export default Rating
