import { Router } from "express"
import { authorize } from "../../common/auth.middleware"
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants"
import { RouteConfig } from "../RouteConfig"
import EmployeeViewController from "../../controllers/emp/EmployeeViewController"

//import JWT from '../middleware/JWT'
export class ReportRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "ReportRoutes")
  }
  configureRoutes() {

    this.router.route(`/reports/benchemployees`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),EmployeeViewController.getAllEmployeesOnBench])
  
    return this.router;
  }
}
