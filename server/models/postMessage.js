import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    caption: String,
    url: String,
    name: String,
   // tags: [String],
   // selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;  //exporting mongooes model into PostMessage file