export default (posts =[] ,action) =>
{
  switch(action.type)
  {
      case 'UPDATE': 
           return posts.map( (post) => post._id = action.payload._id ? action.payload : post);
      case 'FETCH_ALL' : 
            return action.payload; //action.payload is actual post
      case 'CREATE' :
            return [...posts, action.payload];     
      default :
            return posts;
  }
}
//reduceers is function that accept the state also it accept the action