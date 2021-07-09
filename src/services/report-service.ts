import { ReportDao } from "../dao/report-dao";

export default class ReportService {
    private reportDao: ReportDao;

    constructor() {
        this.reportDao = new ReportDao();
    }

    async getReports(req, res){
        return await this.reportDao.getReports(req, res)
    }

    async getReportsByVersion (req, res) {
        return await this.reportDao.getReportsByVersion(req, res)
    }
}