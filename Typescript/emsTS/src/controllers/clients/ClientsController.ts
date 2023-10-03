
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { ADMINISTRATOR_FAILED, DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { ClientsResp } from "../../interfaces/responses/ClientsResp.interface";
import { ClientsService } from "../../services/clients/ClientsService";
class ClientsController {
  constructor() { }
  async create(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }

      var objClientsService = new ClientsService();
      let clientsResp:ClientsResp = await objClientsService.create(params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
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
      var companyProjectId = req.body.ClientId;
      var objClientsService = new ClientsService();
      let clientsResp:ClientsResp = await objClientsService.update(companyProjectId, params, (req as CustomRequest).tokenData);
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
      let clientId = req.params.clientId;
      var objClientsService = new ClientsService();
      let result2 = await objClientsService.getById(clientId, (req as CustomRequest).tokenData);
      if(result2 !== null)
      {
          return res.status(statusCodes.OK).send(result2);
      }
      return res.status(statusCodes.OK).send(result2);
    } catch (error:any) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  async getAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      let payload: any = {};
      for (var key in params) {
        payload[key.toLowerCase()] = params[key];
      }

      var objClientsService = new ClientsService();
      let result2 = await objClientsService.getAll(payload, (req as CustomRequest).tokenData);
      return res.status(200).send(result2);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
export default new ClientsController()