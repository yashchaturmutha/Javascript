import { Sequelize } from 'sequelize';
import { DatabaseServices } from './Database'; 
export { DatabaseServices };
let sequelize: any;
(async () => {
    try {
        sequelize = DatabaseServices.loadSequelize();
        //console.log(sequelize);
    } catch (e) {
        console.log(e);
    }
})();

export {sequelize};
