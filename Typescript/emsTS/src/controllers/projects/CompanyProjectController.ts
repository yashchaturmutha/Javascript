
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { ADMINISTRATOR_FAILED, DATA_NOT_FOUND } from "../../common/errorMessages";
import statusCodes from "../../common/status-codes";
import { CompanyProjectResp } from "../../interfaces/responses/CompanyProjectResp.interface";
import { UserProjectMasterResp } from "../../interfaces/responses/UserProjectMasterResp.interface";
import { CompanyProjectService } from "../../services/projects/CompanyProjectService";
class CompanyProjectController {
  constructor() {}

  async create(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }

      var objCompanyProjectService = new CompanyProjectService();
      let clientsResp:CompanyProjectResp = await objCompanyProjectService.create(params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
        return res.status(statusCodes.OK).send(clientsResp);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error: any) {
      // log error message
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
    }
  }
  
  async updateUserProjectMasterUtlization(req: any, res: Response, next: NextFunction) {

    try {
      let params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }
      var UserProjectMasterId = req.body.UserProjectMasterId;
      var objCompanyProjectService = new CompanyProjectService();
      let clientsResp:UserProjectMasterResp = await objCompanyProjectService.UserProjectMasterUtlization(UserProjectMasterId, params, (req as CustomRequest).tokenData);
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
      var companyProjectId = req.body.CompanyProjectId;
      var objCompanyProjectService = new CompanyProjectService();
      let clientsResp:CompanyProjectResp = await objCompanyProjectService.update(companyProjectId, params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
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
      let projectId = req.params.projectId;
      var objCompanyProjectService = new CompanyProjectService();
      let result2 = await objCompanyProjectService.getById(projectId, (req as CustomRequest).tokenData);
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

        var objCompanyProjectService = new CompanyProjectService();
        let result2 = await objCompanyProjectService.getAll(payload, (req as CustomRequest ).tokenData);
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }

  async lookup(req: any, res: Response, next: NextFunction) {

    try {
      let keyword = req.params.keyword;

        var objCompanyProjectService = new CompanyProjectService();
        let result2 = await objCompanyProjectService.lookup(keyword, (req as CustomRequest ).tokenData);
        return res.status(200).send(result2);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
  }

  async updateProjectById(req: any, res: Response, next: NextFunction){

    try {
      const params = req.body;
      // let payload: any = {};
      // for (var key in params) {
      //   payload[key] = params[key];
      // }
      const companyProjectId = req.body.CompanyProjectId;
      const objCompanyProjectService = new CompanyProjectService();
      const clientsResp:CompanyProjectResp|null = await objCompanyProjectService.updateProjectById(companyProjectId, params, (req as CustomRequest).tokenData);
      if (clientsResp !== null) {
        return res.status(statusCodes.OK).send(clientsResp);
      }
      return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
    } catch (error: any) {
      // log error message
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
    }

  }

   // async addNonBillable(req: any, res: Response, next: NextFunction) {

  //   try {
  //     let params = req.body;
  //     // let payload: any = {};
  //     // for (var key in params) {
  //     //   payload[key] = params[key];
  //     // }
  //     var companyProjectId = req.body.CompanyProjectId;

  //     console.log("req.body addNonBillable");
  //     console.log(req.body);
  //     var objCompanyProjectService = new CompanyProjectService();
  //     let clientsResp:CompanyProjectResp|null = await objCompanyProjectService.addNonBillable(companyProjectId, params, (req as CustomRequest).tokenData);
  //     if (clientsResp !== null) {
  //       console.log(clientsResp);
  //       return res.status(statusCodes.OK).send(clientsResp);
  //     }
  //     return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
  //   } catch (error: any) {
  //     // log error message
  //     return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
  //   }
  // }
  // async updateNonBillable(req: any, res: Response, next: NextFunction) {

  //   try {
  //     const params = req.body;
  //     // let payload: any = {};
  //     // for (var key in params) {
  //     //   payload[key] = params[key];
  //     // }
  //     const companyProjectId = req.body.CompanyProjectId;
  //     const objCompanyProjectService = new CompanyProjectService();
  //     const clientsResp:CompanyProjectResp|null = await objCompanyProjectService.updateNonBillable(companyProjectId, params, (req as CustomRequest).tokenData);
  //     if (clientsResp !== null) {
  //       console.log(clientsResp);
  //       return res.status(statusCodes.OK).send(clientsResp);
  //     }
  //     return res.status(statusCodes.BAD_REQUEST).send(DATA_NOT_FOUND);
  //   } catch (error: any) {
  //     // log error message
  //     return res.status(statusCodes.INTERNAL_SERVER_ERROR).send(ADMINISTRATOR_FAILED);
  //   }
  // }
}
export default new CompanyProjectController()