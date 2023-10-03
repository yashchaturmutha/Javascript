import { RouteConfig } from '../RouteConfig'
import express, { Application, Request, Response, Router } from "express"
import AuthController from '../../controllers/login/AuthController'

//import JWT from '../middleware/JWT'
export class AuthRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "AuthRoutes")
  }
  configureRoutes() {
    //this.router.route(`/LoginDetails`).get([JWT.authenticateJWT, LoginDetailsController.getLoginDetails])
    this.router.route(`/auth`).post([ AuthController.login])
    return this.router
  }
}
