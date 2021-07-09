import * as express from 'express';
import responseHandler = require('../middleware/response-handle');
import CommentService from '../services/comment-service';

export class CommentController {
    public router = express.Router();
    constructor(){
        this.router.post("", responseHandler(this.postComment))
        this.router.delete("/:id", responseHandler(this.deleteComment))
    }

    async postComment(req, res, next){
        const commentService: CommentService = new CommentService();
        return await commentService.postComment(req, res)
    }

    async deleteComment(req, res, next){
        const commentService: CommentService = new CommentService();
        return await commentService.deleteComment(req, res)
    }
}