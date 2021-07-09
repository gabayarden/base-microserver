import mongoose from 'mongoose'
import { BaseDao } from "./base-dao";
import Version from '../models/version';
import Comment from '../models/comment';

export class CommentDao extends BaseDao {

    async postComment(req, res){
        var comment = new Comment();
        comment.body = req.body.body;
        comment.by = req.body.by
        var versionId = mongoose.Types.ObjectId(req.body.version);
        var version = await this.findById(Version, versionId);
        version.comments.push(comment._id);
        await this.update(version)
        return await this.create(comment)
    }

    async deleteComment (req, res) {
        var commentId = mongoose.Types.ObjectId(req.params.id);
        var params = {comments: commentId}
        var version = await this.findOne(Version, params)
        var index = version.comments.indexOf(commentId)
        version.comments.splice(index, 1)
        await this.update(version)
        return await this.deleteOne(Comment, {_id: commentId})
    }
}