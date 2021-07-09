import mongoose  from "mongoose";

const commentSchema: mongoose.Schema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },

    by: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;