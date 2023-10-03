
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { EmployeeDetailsService } from "../../services/emp/EmployeeDetailsService";
import { MasterService } from "../../services/master/MasterService";

class MasterController {
  constructor() {}
  async getAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      let payload: any = {};
      for(var key in params){
        payload[key.toLowerCase()] = params[key];
      }

        var objMasterService = new MasterService();
        let result2 = await objMasterService.getAll(payload, (req as CustomRequest).tokenData);
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }
}
export default new MasterController()