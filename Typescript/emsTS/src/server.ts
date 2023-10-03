require('dotenv').config()

//import CommonConfig from './common/common.env_org';
//import EnvSpecificConfig from './common/env';

global.ENVCONFIG = Object.assign({})


//const http = require('http');
const http = require("http")
//const app = require('./app_setup');
import app from './App';
// import { EmployeeDetails, LoginDetails } from './db/models/init-models';

// if(ENVCONFIG.ENABLE_NEW_RELIC)
// {
//     require('newrelic');
// }

// (async () => {
//     try {
//         const loginDetails =  await LoginDetails.findOne({
//             where: {
//                 UserName: 'vinodnehete'
//             }
//             , include: [{
//                 model: EmployeeDetails,
//                 where: {
//                     CompanyEmailAddress: 'vinod.n@infogen-labs.com',
//                 }
//             }]
//         })
//         if(loginDetails !=null)
//         {
//             console.log("received data");
//         } else {
//             console.log("failed to get data");

//         }
//         //console.log(sequelize);
//     } catch (e) {
//         console.log(e);
//     }
// })();

const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port,function(){
    console.log(`Project started on ${global.ENVCONFIG.NODE_ENV} port: ${port}`);
}); 