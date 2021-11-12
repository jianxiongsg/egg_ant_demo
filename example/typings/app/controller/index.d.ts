// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportNews from '../../../app/controller/news';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
  }
}
