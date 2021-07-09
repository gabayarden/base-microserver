import * as express from 'express';
import responseHandler = require('../middleware/response-handle');
import ReportService from '../services/report-service';

export class ReportController {
    public router = express.Router();
    constructor(){
        this.router.get('', responseHandler(this.getReports));
        this.router.get('/:version', responseHandler(this.getReportsByVersion))
    }

    async getReports(req, res, next){
        const reportService: ReportService = new ReportService();
        const result = reportService.getReports(req, res);
        return result;
    }

    async getReportsByVersion(req, res, next){
        const reportService: ReportService = new ReportService();
        const result = reportService.getReportsByVersion(req, res);
        return result;
    }
}