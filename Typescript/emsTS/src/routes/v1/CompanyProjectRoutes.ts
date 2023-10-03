import express, { Application, Request, Response, Router } from "express"
import { authorize } from "../../common/auth.middleware"
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants"
import CompanyProjectController from "../../controllers/projects/CompanyProjectController"
import { RouteConfig } from "../RouteConfig"

//import JWT from '../middleware/JWT'
export class CompanyProjectRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "CompanyProjectRoutes")
  }
  configureRoutes() {
    
    //this.router.route(`/CompanyProject`).get([JWT.authenticateJWT, CompanyProjectController.getCompanyProject])

    // this.router.route(`/projects/nonbillable`).post([ authorize([RoleAdmin, RoleBUHead]),CompanyProjectController.addNonBillable])
    // this.router.route(`/projects/nonbillable`).put([ authorize([RoleAdmin, RoleBUHead]),CompanyProjectController.updateNonBillable])

    this.router.route(`/projects/lookup/:keyword`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),CompanyProjectController.lookup])
    this.router.route(`/projects`).post([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),CompanyProjectController.create])
    this.router.route(`/projects`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),CompanyProjectController.getAll])
    
    this.router.route(`/projects/:projectId`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),CompanyProjectController.getById])
    this.router.route(`/projects`).put([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),CompanyProjectController.updateProjectById])

    this.router.route(`/projects/employee/utilization`).put([ authorize([RoleAdmin, RoleBUHead]),CompanyProjectController.updateUserProjectMasterUtlization])
    // this.router.route(`/projects/nonbillable`).delete([ authorize([RoleAdmin, RoleBUHead]),CompanyProjectController.unassignNonBillable])

    return this.router;
  }
}
