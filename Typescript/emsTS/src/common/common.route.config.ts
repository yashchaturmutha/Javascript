import express, { Application, Router } from "express"
export abstract class RouteConfig {
  router: Router
  name: string
  constructor(app: Router, name: string) {
    this.router = app
    this.name = name
    this.configureRoutes()
  }
  getName() {
    return this.name
  }
  abstract configureRoutes(): Router
}