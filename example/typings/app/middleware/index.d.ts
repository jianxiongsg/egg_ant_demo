// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportOrigin from '../../../app/middleware/origin';
import ExportReport from '../../../app/middleware/report';
import ExportRobot from '../../../app/middleware/robot';
import ExportUser from '../../../app/middleware/user';

declare module 'egg' {
  interface IMiddleware {
    origin: typeof ExportOrigin;
    report: typeof ExportReport;
    robot: typeof ExportRobot;
    user: typeof ExportUser;
  }
}
