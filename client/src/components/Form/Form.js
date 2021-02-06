import React, { useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
//import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost,updatePost } from '../../actions/posts';
//import { updatePost } from '../../../../server/controllers/posts';
const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({ name: '', caption: '', url: '' });
 const post = useSelector((state) => currentId ? state.posts.find((p) => p._id = currentId):null );
  const classes = useStyles();
  const dispatch = useDispatch();


 useEffect(() => {
  if (post) setPostData(post);
  }, [post])

 const handleSubmit = async (e) => {
  e.preventDefault();
  if(currentId)
  {
    dispatch(updatePost(currentId,postData));
    clear();
  }
  else
  {
  dispatch(createPost(postData));
  clear();
 
  }
  

};
  const clear = () => {
     setCurrentId(null);
     setPostData({ name: '', caption: '', url: ''});

  }
  return (
    
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h5">{currentId ? 'Editing a MEME' : 'MEME STREAM'}</Typography>
        <TextField name="name" variant="outlined" label="Full Name" fullWidth  value={ postData.name } onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
        <TextField name="caption" variant="outlined" label="Creative Caption for MEME" fullWidth value={postData.caption} onChange={(e) => setPostData({ ...postData, caption: e.target.value })} />
        <TextField name="url" variant="outlined" label="Enter Image URL" fullWidth  value={postData.url} onChange={(e) => setPostData({ ...postData, url: e.target.value })} />
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;