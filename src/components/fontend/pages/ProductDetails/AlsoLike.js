import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
  card: {
    maxWidth: 'auto',
    borderRadius: 0,
    flex: '0 0 auto',
    margin: '0 10px',
    position: 'relative'
  },
  media: {
    height: 140,
  },
  heart:{
    color: 'rgb(245,0,87)',
    '&:focus':{
      outline: '0'
    },
  },
  buy: {
    color: 'black',
    padding: '5px 20px',
    borderRadius: '100px',
    transition: '.2s',
    marginLeft: 'auto',
    '&:hover':{
      background: 'rgb(245,0,87)',
      color: '#ffffff',
    },
    '&:focus':{
      outline: '0'
    }
  },
  trand: {
    position: 'absolute',
    top: '7px',
    left: '7px',
    background: 'rgb(245,0,87)',
    color: '#ffffff',
    minWidth: '70px',
    padding: '5px 15px',
    fontWeight: '600',
    letterSpacing: '3px',
    fontSize: '15px',
    textTransform: 'uppercase'
  }
});

const SingleCart = ({classes}) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/img/img8.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          There will be title
        </Typography>
        <Typography className="text-center" variant="body2" color="textSecondary" component="p">
          $20
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <IconButton title="add to wishlist" className={classes.heart}>
        <Favorite />
      </IconButton>
      <Button className={classes.buy} size="small" color="primary">
        Buy now
      </Button>
    </CardActions>
    <Trand tag="Specil offers" styles={classes.trand} />
  </Card>
)

const Trand = ({tag,styles}) => (
  <div className={styles}>{tag}</div>
)
const AlsoLike = (props) => {
  const classes = useStyles();
  return (
    <div className="col-12 py-3">
      <h3 className="my-4 ml-5">You may also like</h3>
      <LikeStyle className="li-pro m-3 py-4 justify-content-center" style={{display: 'flex',flexWrap: 'nowrap',overflowX: 'auto'}}>
        {
          [1,2,3,4,5].map((i,key) => {
            return <SingleCart key={key} classes={classes} />
          })
        }
      </LikeStyle>
    </div>
  )
}

const LikeStyle = styled.div`
::-webkit-scrollbar {
  height: 4px;

}
::-webkit-scrollbar-track {
  background: #e3e3e3;

}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default AlsoLike
