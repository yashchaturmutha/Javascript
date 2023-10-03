import express, { Application, Request, Response, Router } from "express"
import ClientsController from "../../controllers/clients/ClientsController"
import { RouteConfig } from "../RouteConfig"

//import JWT from '../middleware/JWT'
export class ClientsRoutes extends RouteConfig {
  constructor(app: Router) {
    super(app, "ClientsRoutes")
  }
  configureRoutes() {
    //this.router.route(`/Clients`).get([JWT.authenticateJWT, ClientsController.getClients])
    this.router.route(`/clients`).post([ ClientsController.create])
    this.router.route(`/clients`).get([ ClientsController.getAll])
    return this.router
  }
}
