import { CommentDao } from "../dao/comment-dao";

export default class ReportService {
    private commentDao: CommentDao;

    constructor() {
        this.commentDao = new CommentDao();
    }

    async postComment(req, res){
        const result = await this.commentDao.postComment(req, res)
        return result._doc;
    }

    async deleteComment (req, res){
        const result = await this.commentDao.deleteComment(req, res);
        return result;
    }
}