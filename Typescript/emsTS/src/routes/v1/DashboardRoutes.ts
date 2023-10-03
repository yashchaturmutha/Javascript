import { Router } from "express";
import { authorize } from "../../common/auth.middleware";
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants";
import { RouteConfig } from "../RouteConfig";
import DashboardController from "../../controllers/dashboard/DashboardController";

//import JWT from '../middleware/JWT'
export class DashboardRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "DashboardRoutes")
  }
  configureRoutes() {
    this.router.route(`/busummary`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),DashboardController.getBUSummary]);

    return this.router
  }
}
