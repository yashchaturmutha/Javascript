/* eslint-disable no-var */
//import CoreResponse from '../utils/Response';  //response structure makes global

declare global {
    var STATUS_CODES: any;
//    var coreResponse: any;
    var ENVCONFIG: any;
    var ERROR_MESSAGE: any;
    var SUCCESS_MESSAGE: any;
    var CONSTANTS: any;
}

export * from './db/services/';

export {global};
  