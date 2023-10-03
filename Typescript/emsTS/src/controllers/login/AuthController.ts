import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import debug, { IDebugger } from "debug";
import AuthService from "../../services/login/AuthService";
import { AuthRequest } from "../../interfaces/requests/AuthRequest";
import statusCodes from "../../common/status-codes";
const jwtSecret: string = process.env.JWT_SECRET || "VinodNeheteJWTSecretToken";
const tokenExpirationInSeconds = 60*60*24;

const log: IDebugger = debug("auth:controller");

class AuthController {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      //const user = { 'EmployeeDetailsId': 2001, 'Roles': [1,2,3,4]};
      let authLoginReq: AuthRequest = req.body;
      const user = await AuthService.authUser(authLoginReq);
      log("user", user);  
      if (user) {
        const isPasswordMatch = true; // await Password.compare(user.password, password);

        if (!isPasswordMatch) {
          throw new Error("Invalid Password");
        } else {
          console.log("jwt Secret", jwtSecret);
          const token = jwt.sign(user, jwtSecret, {
            expiresIn: tokenExpirationInSeconds,
          });
          console.log(token);

          // jwt.verify(token, jwtSecret, (err: any, user: any) => {
          //   console.log(user);
          //   console.log(err);
          //   if (err) {
          //     log("Error", err);
          //     return res
          //       .status(403)
          //       .send({ success: false, message: "Token Expired" });
          //   }

          //   return res.status(200).json({
          //     success: true,
          //     data: user,
          //     token,
          //   });
  

          // });

          return res.status(statusCodes.OK).json({
            success: true,
            data: user,
            token,
          });

        }
      } else {
        log("User Not Found");
        throw new Error("User Not Found");
      }
    } catch (e) {
      next(e);
    }
  }

}

export default new AuthController();
