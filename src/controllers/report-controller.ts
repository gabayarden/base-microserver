import * as express from 'express';
import responseHandler = require('../middleware/response-handle');
import ReportService from '../services/report-service';

export class ReportController {
    public router = express.Router();

    constructor(){
        this.router.post('', responseHandler(this.postReport));
    }

    async postReport(req, res, next){
        const reportService: ReportService = new ReportService();
        const reportResult = await reportService.postReport(req);
        return reportResult;
    }
}