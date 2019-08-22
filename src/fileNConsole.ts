import winston from 'winston';

export class FileNConsole {
    loggerFileConsole = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        defaultMeta: { service: 'file-and-console' },
        transports: [
            new winston.transports.File({ filename: 'tester.log', level: 'debug' }),
            new winston.transports.Console({ format: winston.format.simple() })
        ]
    });

    startLogging(count: number) {
        let start = new Date();
        let index = 0;
        for (; index < count; index++) {
            this.loggerFileConsole.info(`file and console transport ${Date()}`);
        }
        let end = new Date();
        this.loggerFileConsole.info(`file & console elapsed: ${end.getTime() - start.getTime()} | ${index}`);

    }
}