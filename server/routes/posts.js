//All the routes related post 
import express from 'express';

import { getPosts,createPost,updatePost} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/',createPost);
router.patch('/:id', updatePost);
//router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);
export default router; //Go to index.js and import this route in it.
