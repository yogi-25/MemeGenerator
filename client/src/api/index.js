import axios from 'axios'; //use for make api calls
const url = 'http://localhost:5000/memes';  //its return all the memes currently have in databases
export const fetchPosts = () => axios.get(url); //to fetch using redux capabilities ,We are using redux to make the application scalable.
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id,updatedPost) => axios.patch('${url}/${id}',updatedPost);
