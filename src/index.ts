import {FileLogger} from './fileLogger';
import {FileNConsole} from './fileNConsole';
const printCounter=1000;
let fileLogger =new FileLogger();
fileLogger.startLogging(printCounter);
let fileNConsole= new FileNConsole();
fileNConsole.startLogging(printCounter);

