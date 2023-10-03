
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { EmployeeDetailsService } from "../../services/emp/EmployeeDetailsService";

class EmployeeDetailsController {
  constructor() {}
  async getById(req: any, res: Response, next: NextFunction) {
    try {
      let EmployeeDetailsId = req.params.EmployeeDetailsId;
      var objEmployeeDetailsService = new EmployeeDetailsService();
      let result2 = await objEmployeeDetailsService.getById(EmployeeDetailsId, (req as CustomRequest).tokenData);
      if(result2 !== null)
      {
          return res.status(statusCodes.OK).send(result2);
      }
      return res.status(statusCodes.NOT_FOUND).send(DATA_NOT_FOUND);
    } catch (error:any) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
  async getAll(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.query;
      let payload: any = {};
      for(var key in params){
        payload[key.toLowerCase()] = params[key];
      }

        var objEmployeeDetailsService = new EmployeeDetailsService();
        let result2 = await objEmployeeDetailsService.getAll(payload, (req as CustomRequest).tokenData);
        if(result2 !== null)
        {
            result2.forEach(element => {
                console.log(element);
            });
        }
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }
}
export default new EmployeeDetailsController()