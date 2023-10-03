import express, { Application, Request, Response, Router } from "express"
import { authorize } from "../../common/auth.middleware"
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants"
import SOWDetailsController from "../../controllers/sow/SOWDetailsController"
import { RouteConfig } from "../RouteConfig"

//import JWT from '../middleware/JWT'
export class SOWDetailsRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "SOWDetailsRoutes")
  }
  configureRoutes() {
    //this.router.route(`/SOWDetails`).get([JWT.authenticateJWT, SOWDetailsController.getSOWDetails])
    this.router.route(`/sow`).post([ authorize([RoleAdmin, RoleFinance]),SOWDetailsController.create])
    this.router.route(`/sow`).put([ authorize([RoleAdmin, RoleFinance]),SOWDetailsController.update])
    this.router.route(`/sow`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),SOWDetailsController.getAll])
    this.router.route(`/sow/:SOWMasterId`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),SOWDetailsController.getById])
    this.router.route(`/sow/project/:projectId`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),SOWDetailsController.getByProjectId])

    return this.router
  }
}
