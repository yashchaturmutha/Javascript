import express, { Application, Request, Response, Router } from "express"
import { authorize } from "../../common/auth.middleware"
import { RoleAdmin, RoleBUHead, RoleFinance } from "../../common/constants"
import EmployeeDetailsController from "../../controllers/emp/EmployeeDetailsController"
import EmployeeViewController from "../../controllers/emp/EmployeeViewController"
import { RouteConfig } from "../RouteConfig"

//import JWT from '../middleware/JWT'
export class EmployeeDetailsRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "EmployeeDetailsRoutes")
  }
  configureRoutes() {
    this.router.route(`/employees/details`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),EmployeeViewController.getAll])
    this.router.route(`/employees/search`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),EmployeeViewController.searchAll])
    this.router.route(`/employees/:EmployeeDetailsId`).get([ authorize([RoleAdmin, RoleFinance, RoleBUHead]),EmployeeViewController.getById])
    return this.router
  }
}
