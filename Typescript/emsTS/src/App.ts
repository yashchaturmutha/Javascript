import express, { Express, Request, Response, NextFunction } from 'express';
import * as http from "http"
import { DatabaseServices } from './db/Database';
import { RouteConfig } from './routes/RouteConfig';
import { AuthRoutes } from './routes/v1/AuthRoutes';
import { ClientsRoutes } from './routes/v1/ClientsRoutes';
import { CompanyProjectRoutes } from './routes/v1/CompanyProjectRoutes';
import { EmployeeDetailsRoutes } from './routes/v1/EmployeeDetailsRoutes';
import { MasterRoutes } from './routes/v1/MasterRoutes';
import { SOWDetailsRoutes } from './routes/v1/SOWDetailsRoutes';
import { DashboardRoutes } from './routes/v1/DashboardRoutes';
import { ReportRoutes } from './routes/v1/ReportRoutes';
//import cors from "cors"


class App {
  public express:Express;
  public routes: Array<RouteConfig> = []
  
  constructor () {
    this.express = express();
    this.express.use(express.json())
    this.express.use((req:Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
      }
      next();
    });
    DatabaseServices.loadSequelize();
    
    this.mountRoutes();
  }

  private mountRoutes (): void {
    
    var v1 = express.Router();
    this.express.use('/api/v1', v1);

    this.routes.push(new AuthRoutes(v1));
    this.routes.push(new ClientsRoutes(v1));
    this.routes.push(new CompanyProjectRoutes(v1));
    this.routes.push(new SOWDetailsRoutes(v1));
    this.routes.push(new EmployeeDetailsRoutes(v1));
    this.routes.push(new MasterRoutes(v1));
    this.routes.push(new DashboardRoutes(v1)); //
    this.routes.push(new ReportRoutes(v1)); //
    
    this.routes.forEach((route: RouteConfig) => {
      console.log(`Routes configured for ${route.getName()}`)
    })
  }
}

export default new App().express
