"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_2 = __importDefault(require("winston"));
const winston_cloudwatch_1 = __importDefault(require("winston-cloudwatch"));
const { combine, timestamp, prettyPrint, colorize } = winston_1.format;
const errorStackFormat = winston_2.default.format(info => {
    if (info instanceof Error) {
        return Object.assign({}, info, {
            stack: info.stack,
            message: info.message
        });
    }
    return info;
});
const logger = winston_1.createLogger({
    format: combine(errorStackFormat(), timestamp(), prettyPrint()),
    transports: [
        new winston_1.transports.Console(),
    ],
    exitOnError: false,
});
if (process.env.NODE_ENV === 'production') {
    const cloudwatchConfig = {
        logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
        logStreamName: `${process.env.CLOUDWATCH_GROUP_NAME}-${process.env.ENV_NAME}`,
        createLogStream: true,
        awsAccessKeyId: process.env.CLOUDWATCH_ACCESS_KEY,
        awsSecretKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
        awsRegion: process.env.CLOUDWATCH_REGION,
        messageFormatter: (item) => `[${item.level}] : ${item.message} \n${item.stack ? item.stack : ''}`
    };
    logger.add(new winston_cloudwatch_1.default(cloudwatchConfig));
}
exports.default = logger;
//# sourceMappingURL=logger.js.map