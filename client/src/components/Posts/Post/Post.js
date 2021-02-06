import React from 'react';
import { Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
const Post = ({post,setCurrentId}) => {
   
    const classes = useStyles();
    return (

        <Card className={classes.card}>
            <p>&nbsp;</p> 
            <p>&nbsp;</p> 
            <p>&nbsp;</p> 

             <img className={classes.image} src={post.url} alt="image" height="auto" max-width="100"/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}
                </Typography>
                <Typography variant="body2">{post.caption}</Typography>
                
            </div>
            
            <div className={classes.overlay2}>
              <Button 
              style={{color:'black'}} 
              size="small" 
              onClick={() => setCurrentId(post._id)}>
                  <MoreHorizIcon fontSize="default" />
              </Button>
            </div>
              
               <CardActions className={classes.cardActions}>
                   <Button size="small" color="primary" onClick={() => {}}>
                       <ThumbUpAltIcon fontSize="small"/>
                       Like
                       {post.likeCount}
                   </Button>
                   <Button size="small" color="primary" onClick={() => {}}>
                       <DeleteIcon fontSize="small"/>
                       Delete
                   </Button>
               </CardActions>

        </Card>  
    );
}
export default Post;