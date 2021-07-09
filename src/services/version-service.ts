import { resourceUsage } from "process";
import { VersionDao } from "../dao/version-dao";

export default class ReportService {
    private versionDao: VersionDao;

    constructor() {
        this.versionDao = new VersionDao();
    }

    async postVersion(req, res){
        const result = await this.versionDao.postVersion(req, res);
        return result._doc;
    }
}