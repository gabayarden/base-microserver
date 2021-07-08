import multer from 'multer';
import formidable from 'formidable';
import { BaseDao } from "./base-dao";
import Report from '../models/report';

var upload = multer({dest: __dirname+'/public/reports/'})

export class ReportDao extends BaseDao {

    async postReport(req) {

        var form = new formidable.IncomingForm()
        var report = new Report();
        await form.parse(req, (err, fields, files)=> {
            var path:String = Date.now() + '-' + files.report.name;
            path = '/public/reports/' + path.replace(/ /g, '');
            report.name = files.report.name.split('.')[0];
            report.path = path;
        })
        return this.create(report);
    }
}