import * as express from 'express';
import responseHandler = require('../middleware/response-handle');
import VersionService from '../services/version-service';

export class VersionController {
    public router = express.Router();
    constructor(){
        this.router.post('', responseHandler(this.postVersion));
    }

    async postVersion(req, res, next){
        const versionService: VersionService = new VersionService();
        const result = await versionService.postVersion(req, res)
        return result;
    }
}