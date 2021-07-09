import mongoose from 'mongoose'
import { BaseDao } from "./base-dao";
import Report from '../models/report';
import Version from '../models/version';

export class VersionDao extends BaseDao {

    async postVersion(req, res) {
        var version = new Version();
        version.name = req.body.name
        var reportId = mongoose.Types.ObjectId(req.body.report);
        var report = await this.findById(Report, reportId)
        report.versions.push(version._id)
        await this.update(report)
        return await this.create(version)
    }
}