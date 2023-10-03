//import AWS from "aws-sdk";
import { Dialect, Sequelize } from 'sequelize';
import { DB_AWS_REGION, DB_HOST, DB_USER,DB_PASSWORD, DB_NAME, DB_PORT, DB_DIALECT, NODE_ENV } from "../common/env";
import { LOCAL_ENV } from "../common/constants";
import { initModels } from './models/init-models';


export class DatabaseServices {
	static sequelize: Sequelize;
	static _models: any;
	static getSequelize():Sequelize {
		return DatabaseServices.sequelize;
	}
	static Models():any {
		return DatabaseServices._models;
	}
	static loadSequelize():Sequelize {
		if(DatabaseServices.sequelize !== undefined) {
			// restart connection pool to ensure connections are not re-used across invocations
			DatabaseServices.sequelize.connectionManager.initPools();

			// restore `getConnection()` if it has been overwritten by `close()`
			if (DatabaseServices.sequelize.connectionManager.hasOwnProperty("getConnection")) {
				DatabaseServices.sequelize.connectionManager.getConnection;
			}
			return DatabaseServices.sequelize;
		}
		var dialect: Dialect = 'mysql';
		switch(DB_DIALECT)
		{
			case 'mysql':
				dialect = 'mysql';
				break;
			case 'mssql':
				dialect = 'mssql';
			break;
			case 'mariadb':
				dialect = 'mariadb';
			break;
		}
		if (NODE_ENV == LOCAL_ENV) {

			console.log('DB_NAME:' + DB_NAME);
			console.log('DB_USER:' + DB_USER);
			//console.log('DB_PASSWORD:' + DB_PASSWORD);
			console.log('DB_HOST:' + DB_HOST);
			console.log('dialect:' + dialect);

			DatabaseServices.sequelize  = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
				host: DB_HOST,
				dialect: dialect,
				ssl: false,
				dialectOptions: {
					options: { 
						encrypt: false,
						enableArithAbort: false
					},
					"instanceName": "INFOGEN"
				},
				pool: {
					max: 10,
					min: 0,
					idle: 0,
					acquire: 60000,
					// evict: 3000
				}
			}
			);

		} else {
			// console.log('inside loadSequelize');
			// const signer = new AWS.RDS.Signer({
			// 	region: DB_AWS_REGION,
			// 	hostname: DB_HOST,
			// 	port: parseInt(DB_PORT),
			// 	username: DB_USER
			// });
			// let token = signer.getAuthToken({ username: DB_USER });
			// console.log("token in db", { token });
			// DatabaseServices.sequelize = new Sequelize(DB_NAME, DB_USER, token + '\0', {
			// 	host: DB_HOST,
			// 	dialect: DB_DIALECT,
			// 	ssl: true,
			// 	dialectOptions: {
			// 		ssl: 'Amazon RDS',
			// 		authPlugins: { mysql_clear_password: () => () => { 
			// 			let tokenInner = signer.getAuthToken({ username: DB_USER });
			// 			console.log("tokenInner in db", { tokenInner });
			// 			return tokenInner; 
			// 		} }
			// 	},
			// 	pool: {
			// 		max: 2,
			// 		min: 0,
			// 		idle: 0,
			// 		acquire: 1000000,
			// 		// evict: 3000
			// 	}
			// });
			////sequelize.connectionManager.initPools();
			//DatabaseServices.sequelize.authenticate();
		}
		DatabaseServices._models = initModels(DatabaseServices.sequelize);
		return DatabaseServices.sequelize;
	}
}

// export const loadSequelize = () => {
// 	let sequelize:any;
// 	if(NODE_ENV == LOCAL_ENV) {
// 		sequelize = new Sequelize(DB_NAME,DB_USER,'', {
// 				host: DB_HOST,
// 				dialect: 'mysql',
// 				pool: {
// 					max: 2,
// 					min: 0,
// 					idle: 0,
// 					acquire: 3000,
// 					// evict: 3000
// 				}
// 			}
// 		);
		
// 	} else {
// 		console.log('inside loadSequelize');
// 		const signer = new AWS.RDS.Signer({
// 			region: AWS_REGION,
// 			hostname: DB_HOST,
// 			port: parseInt(DB_PORT),
// 			username: DB_USER
// 		});
			
// 		let token = signer.getAuthToken({ username: DB_USER });
// 		console.log("token in db", {token});
		
	
// 		sequelize = new Sequelize(DB_NAME, DB_USER, token + '\0', {
// 			host: DB_HOST,
// 			dialect: 'mysql',
// 			ssl:true,
// 			dialectOptions: {
// 				ssl: 'Amazon RDS',
// 				authPlugins: { mysql_clear_password: () => () => { return token }}
// 			},
// 			pool: {
// 				max: 5,
// 				min: 0,
// 				idle: 0,
// 				acquire: 1000000,
// 				// evict: 3000
// 			}
// 		});
// 		//sequelize.connectionManager.initPools();
// 		sequelize.authenticate();
// 	}
// 	return sequelize;
// }

// export { loadSequelize };