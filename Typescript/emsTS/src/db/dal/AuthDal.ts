import { DatabaseServices } from "..";
import { AuthRequest } from "../../interfaces/requests/AuthRequest";
import { LoginDetailsResp } from "../../interfaces/responses/LoginDetailsResp";
// import EmployeeDetails from "../models/EmployeeDetails";
// import LoginDetails from "../models/LoginDetails";
import * as EmployeeDetailsMapper from '../../mapper/EmployeeDetailsMapper'
import { EmployeeDetailRoleModel, EmployeeDetailsModel, LoginDetailsModel, MasterBusinessUnitModel } from "../models/init-models";

export const  authUser = async (loginData:AuthRequest): Promise<LoginDetailsResp> => {
    // LoginDetailsModel.hasOne(EmployeeDetailsModel, {foreignKey:'EmployeeDetailsId', sourceKey:'EmployeeDetailsId'} );
    // EmployeeDetailsModel.belongsTo(LoginDetailsModel, {foreignKey:'EmployeeDetailsId', targetKey:'EmployeeDetailsId'} );
    const loginDetails =  await LoginDetailsModel.findOne({
        where: {
            UserPasswordNew: loginData.password
        }
        , include: [{
            as: "ed",
            model: EmployeeDetailsModel,
            where: {
                CompanyEmailAddress: loginData.email,
            }, 
            include:[
                {
                    as: "edr",
                    model: EmployeeDetailRoleModel
                    
                },
                {
                    as: "hmbu",
                    model: MasterBusinessUnitModel
                    
                }
            ]
        }]
    })
    if (!loginDetails) {
        // @todo throw custom error
        throw new Error('not found')
    }
    //console.log(loginDetails);
    return EmployeeDetailsMapper.dbModelToLoginDetails(loginDetails);
}