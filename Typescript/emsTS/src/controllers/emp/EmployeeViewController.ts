
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { EmployeeViewService } from "../../services/emp/EmployeeViewService";

class EmployeeViewController {
  constructor() {}
  async getById(req: any, res: Response, next: NextFunction) {
    try {
      let EmployeeDetailsId = req.params.EmployeeDetailsId;
      var objEmployeeViewService = new EmployeeViewService();
      let result2 = await objEmployeeViewService.getById(EmployeeDetailsId, (req as CustomRequest).tokenData);
      if(result2 !== null)
      {
          return res.status(statusCodes.OK).send(result2);
      }
      return res.status(statusCodes.NOT_FOUND).send(DATA_NOT_FOUND);
    } catch (error:any) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
  
  async searchAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      let payload: any = {};
      for(var key in params){
        payload[key.toLowerCase()] = params[key];
      }

        var objEmployeeViewService = new EmployeeViewService();
        let result2 = await objEmployeeViewService.searchAll(payload, (req as CustomRequest).tokenData);
        if(result2 !== null)
        {
           
        }
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }

  async getAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      let payload: any = {};
      for(var key in params){
        payload[key.toLowerCase()] = params[key];
      }

        var objEmployeeViewService = new EmployeeViewService();
        let result2 = await objEmployeeViewService.getAll(payload, (req as CustomRequest).tokenData);
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }
  async getAllEmployeesOnBench(req: any, res: Response, next: NextFunction) {

    try {
      const params = req.query;
      const payload: any = {};
      for (let key in params) {
        payload[key.toLowerCase()] = params[key];
      }
      const objEmployeeViewService = new EmployeeViewService();
      const result2 = await objEmployeeViewService.getAllEmployeesOnBench(payload, (req as CustomRequest).tokenData);
      return res.status(200).send(result2);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
export default new EmployeeViewController()