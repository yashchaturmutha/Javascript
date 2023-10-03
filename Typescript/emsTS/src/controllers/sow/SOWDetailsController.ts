
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { ADMINISTRATOR_FAILED, DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { SOWDetailsFilterReq } from "../../interfaces/requests/SOWDetailsReq.interface";
import { SOWDetailsResp } from "../../interfaces/responses/SOWDetailsResp.interface";
import { SOWDetailsService } from "../../services/sow/SOWDetailsService";
class SOWDetailsController {
  constructor() {}

  async create(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }

      var objSOWDetailsService = new SOWDetailsService();
      let clientsResp:SOWDetailsResp = await objSOWDetailsService.create(params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
        console.log(clientsResp);
        return res.status(statusCodes.OK).send(clientsResp);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error: any) {
      // log error message
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
    }
  }

  async update(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }
      var SOWMasterId = req.body.SOWMasterId;
      var objSOWDetailsService = new SOWDetailsService();
      let clientsResp:SOWDetailsResp = await objSOWDetailsService.update(SOWMasterId, params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
        console.log(clientsResp);
        return res.status(statusCodes.OK).send(clientsResp);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error: any) {
      // log error message
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
    }
  }

  async getById(req: any, res: Response, next: NextFunction) {
    try {
      let projectId = req.params.SOWMasterId;
      var objSOWDetailsService = new SOWDetailsService();
      let result2 = await objSOWDetailsService.getById(projectId, (req as CustomRequest).tokenData);
      if(result2 !== null)
      {
          return res.status(statusCodes.OK).send(result2);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error:any) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
  
  async getByProjectId(req: any, res: Response, next: NextFunction) {
    try {
      let projectId = req.params.projectId;
      var objSOWDetailsService = new SOWDetailsService();
      let result2 = await objSOWDetailsService.getByProjectId(projectId, (req as CustomRequest).tokenData);
      if(result2 !== null)
      {
          console.log(result2);
          return res.status(statusCodes.OK).send(result2);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error:any) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
  async getAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      //let payload: any = {};
      //for(var key in params){
        //payload[key.toLowerCase()] = params[key];
      //}
        let payload: SOWDetailsFilterReq = {
          status:  params['status'] !== undefined? parseInt(params['status']): 0,
          cpid:  params['cpid'] !== undefined? parseInt(params['cpid']): null,
          buid:  params['buid'] !== undefined? parseInt(params['buid']): null
        }
        var objSOWDetailsService = new SOWDetailsService();
        let result2 = await objSOWDetailsService.getAll(payload, (req as CustomRequest).tokenData);
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }
}
export default new SOWDetailsController()