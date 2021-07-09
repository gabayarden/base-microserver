import mongoose from 'mongoose';
import { BaseDao } from "./base-dao";
import Report from '../models/report';
import Version from '../models/version';

export class ReportDao extends BaseDao {

    async getReports(req, res) {
      var params = {};
      var reports =  await this.find(Report, params);
      //await reports.populate('Version', '_id name');
      return reports;
    }

    async getReportsByVersion(req, res){
      var versionId = mongoose.Types.ObjectId(req.params.version);
      var report = await this.findOne(Report, {versions: versionId})
      var version = await this.findOne(Version, {_id: versionId})
      return {
        report: report,
        version: version
      }
    }
}