import { AuthRequest } from "../../interfaces/requests/AuthRequest";
import { LoginDetailsResp } from "../../interfaces/responses/LoginDetailsResp";
import * as LoginDetailsDal from '../../db/dal/AuthDal'
import md5 from "md5";

class AuthService {

  public authUser = (loginData:AuthRequest): Promise<LoginDetailsResp> => {
    // const validationResult = userValidation.login.validate({ email: loginData.email, 
    //     password: loginData.password }, { abortEarly: false });
    // console.log(validationResult.error);       
    // if (validationResult.error) {
    //     throw new Error( JSON.stringify(validationResult.error.details));
    // }

    let numbers: number [] = md5(loginData.password, { asBytes: true});
    let md5Password:string = '';
    numbers.forEach(element => {
        md5Password += element.toString() 
    });
    loginData.password = md5Password;
    return LoginDetailsDal.authUser(loginData);
}

    // return User.findOne({
    //   email: email,
    // }).exec();
  //}
}

export default new AuthService();


// import {Request,Response,NextFunction} from 'express';
// import { Employee } from './Employee';
// import jwt from 'jsonwebtoken';

// import {accessTokenSecret, privateKey,publicKey, refreshTokenSecret} from '../../config/jwt'; 

// const sessions: Record < string, { sessionId: string; email: string; valid: boolean , empId:number} > = {};

// export class Session { 

//     static async createSessionHandler(req: any, res: any) {

//         console.log("createSessionHandler");
        
//         const { email, password } = req.body;
      
//         const user:any = await Employee.showEmployeeByEmail(email);
//         // console.log(user);
      
//         if (! user.length || user[0].password !== password) {
//           return res.status(401).send("Invalid email or password");
//         }
      
//         const session:any = await Session.createSession(user[0].identity, user[0].empId);
//         console.log("session");
//         console.log(session);
      
//         // create access token
//         const accessToken=jwt.sign({ email: user[0].identity, empId: user[0].empId, sessionId: session.sessionId },accessTokenSecret,{expiresIn:'20s'} );
//         const refreshToken =jwt.sign({ sessionId: session.sessionId }, refreshTokenSecret,{expiresIn:'30s'});
//         // const accessToken = await Session.signJWT({ email: user[0].identity, empId: user[0].empId, sessionId: session.sessionId }, "30s" );
//         // const refreshToken = Session.signJWT({ sessionId: session.sessionId }, "300s");

//         // set access token in cookie
//         // res.cookie("accessToken", accessToken, {
//         //   maxAge: 500, // 5 seconds in ms
//         //   httpOnly: true, // js wont be able to access this cookie, only we can access through http (advantage over storing access token in localStorage)
//         // });
        
//         // set refresh token in cookie
//         res.cookie("refreshToken", refreshToken, {
//         //   maxAge: 3.154e10, // 1 year
//           maxAge: 30*100, // 60 secs in ms
//           httpOnly: true,
//           secure: false, //changes secure
//           sameSite: 'None',
//         });
      
//         // send user back
//         // decoded version of access token
//         // return res.send(Session.verifyJWT(accessToken).payload);
//         return res.json({"accessToken":accessToken,"refreshToken":refreshToken});
//     }

//     // static async loginHandler(req: Request, res: Response){

//     //   const { email, password } = req.body;

//     //   const accessToken=jwt.sign({ email, password },accessTokenSecret,{expiresIn:'20s'} );
//     //   const refreshToken =jwt.sign({ email, password }, refreshTokenSecret);
      
//     //   res.cookie("refreshToken", refreshToken, {
//     //     //   maxAge: 3.154e10, // 1 year
//     //       httpOnly: true,
//     //       // secure: true,
//     //       maxAge: 6000, // 60 secs in ms
//     //   });

//     //   res.json({accessToken:accessToken,refreshToken:refreshToken});
//     // }

//     // static async loginHandler2(req: Request, res: Response){

//     //   // @ts-ignore
//     //   res.json(req.user);
//     // }

//     static async getSessionHandler(req: Request, res: Response){
//         console.log("getSessionHandler");
//         const authHeader:any=req.headers['authorization'];
//         const accessToken:string=authHeader ? authHeader.split(' ')[1]:authHeader;
//         //@ts-ignore 
//         return res.json({"user":req.user});
//     }

//     static async deleteSessionHandler(req: any, res: any) {

//           // @ts-ignore
//           res.cookie("refreshToken", "", {
//           maxAge: 30*100, // 60 secs in ms
//           httpOnly: true,
//           secure: true, //changes secure
//           sameSite: 'None',
//           });
        
//         // @ts-ignore
//           const session = Session.invalidateSession(req.user.sessionId);
        
//         return res.send({"success":true});
//     }

//     static async createSession(email: string, empId: number) {

//         const sessionId = String(Object.keys(sessions).length + 1);
//         const session = { sessionId, email, valid: true, empId };
//         sessions[sessionId] = session;
//         return session;
//     }

//     // sign jwt
//     static async signJWT(payload: object, expiresIn: string | number) {
//         return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn });
//     }
    
//     // verify jwt
//     static verifyJWT(token: string,secretKey:string) {
//         try {
//         const decoded = jwt.verify(token, secretKey);
//         return { payload: decoded, expired: false };
//         } catch (error:any) {
//         return { payload: null, expired: error.message.includes("jwt expired") };
//         }
//     }

//     static async getSession(sessionId: string) {
//         const session = sessions[sessionId];
      
//         return session && session.valid ? session : null;
//     }

//     static async invalidateSession(sessionId: string) {
//         const session = sessions[sessionId];
      
//         if (session) {
//           sessions[sessionId].valid = false;
//         }
      
//         return sessions[sessionId];
//     }

//     static async authenticateToken(req:Request,res:Response,next:NextFunction){
      
//       console.log("authenticateToken");
//       console.log(req.cookies);
      
//       const authHeader:any=req.headers['authorization'];
//       const accessToken:string=authHeader ? authHeader.split(' ')[1]:authHeader;
//       const refreshToken=req.cookies.refreshToken;

//       if(! refreshToken){
//         return res.sendStatus(401);
//       }

//       jwt.verify(refreshToken,refreshTokenSecret,(err: any,user: any)=>{
//         if(err){
//           return res.sendStatus(403);
//         }
//         else {
//           if(! accessToken){
//             return res.sendStatus(401);
//           }
//           jwt.verify(accessToken,accessTokenSecret,(err,user)=>{
//             if(err){
//               return res.sendStatus(403);
//             }
//             //@ts-ignore
//             req.user=user;
//             next();
//           })
//         }
//       })
//     }
// }

// export {};