import { ReportDao } from "../dao/report-dao";

export default class ReportService {
    private reportDao: ReportDao;

    constructor() {
        this.reportDao = new ReportDao();
    }

    async postReport(req) {
        return await this.reportDao.postReport(req);
    }
}