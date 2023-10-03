import express, { Application, Request, Response, Router } from "express"
import { authorize } from "../../common/auth.middleware"
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants"
import MasterController from "../../controllers/master/MasterController"
import { RouteConfig } from "../RouteConfig"

//import JWT from '../middleware/JWT'
export class MasterRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "MasterRoutes")
  }
  configureRoutes() {
    this.router.route(`/masters`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),MasterController.getAll])
    return this.router
  }
}
