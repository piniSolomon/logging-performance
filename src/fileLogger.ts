import winston from 'winston'
export class FileLogger {
    loggerFile = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        defaultMeta: {service: 'file-only'},
        transports:[
            new winston.transports.File({filename: 'tester.log', level:'debug'}),
        ]
    });

    startLogging(count:number){
        
        let startFile= new Date();
        let index=0;
        for (; index < count; index++) {
            this.loggerFile.info(`only file transport ${Date()}`);
        }
        let endFile=new Date();
        this.loggerFile.info(`no console elapsed: ${endFile.getTime()-startFile.getTime()} | ${index}`);
    }
}