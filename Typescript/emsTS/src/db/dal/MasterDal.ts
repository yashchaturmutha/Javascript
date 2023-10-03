import { Op } from 'sequelize'
import { isEmpty } from 'lodash'

import { DepartmentMasterModel, DesignationMasterModel, EmployeeDetailsModel, MasterBusinessUnitModel, MasterCompanyLocationModel, MasterEmployeeTypeModel, MasterGenderModel, MasterProjectTypeModel } from '../models/init-models'
import { EmployeeDetailsReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { EmployeeDetailsResp } from '../../interfaces/responses/EmployeeDetailsResp';
import { dbEmployeeDetailsModelToResp } from '../../mapper/EmployeeDetailsMapper';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { RoleBUHead } from '../../common/constants';
import { MasterResp } from '../../interfaces/responses/MasterResp.interface';
import { MasterReq } from '../../interfaces/requests/MasterReq.interface';
import { dbDepartmentMasterToResp, dbDesignationMasterToResp, dbMasterBusinessUnitToResp, dbMasterCompanyLocationToResp, dbMasterEmployeeTypeToResp, dbMasterGenderToResp, dbMasterProjectTypeToResp } from '../../mapper/MasterMapper';
import { Helpers } from '../../common/Helpers';


export class MasterDal {

    async getAll(filters: MasterReq, tokenData: LoginDetailsResp): Promise<MasterResp> {
        let where: any = {};

        // {
        //     if (filters && filters.hasOwnProperty('lastname')) {
        //         where.LastName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'lastname') + '%' }
        //     }

        // }
        let masterResp: MasterResp = new MasterResp();
        if (filters.departmentmasterresp=='1') {
            let DepartmentMasters = await DepartmentMasterModel.findAll();
            masterResp.DepartmentMaster = DepartmentMasters.map(dbDepartmentMasterToResp);
        }
        if (filters.designationmasterresp=='1') {
            let DesignationMasters = await DesignationMasterModel.findAll();
            masterResp.DesignationMaster = DesignationMasters.map(dbDesignationMasterToResp);
        }
        if (filters.masterbusinessunitresp=='1') {
            let whereBu: any = { };
            if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
            {
                whereBu.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
            }
            let MasterBusinessUnits = await MasterBusinessUnitModel.findAll({
                where: whereBu
            });
            masterResp.MasterBusinessUnit = MasterBusinessUnits.map(dbMasterBusinessUnitToResp);
        }
        if (filters.mastercompanylocationresp=='1') {
            let MasterCompanyLocations = await MasterCompanyLocationModel.findAll();
            masterResp.MasterCompanyLocation = MasterCompanyLocations.map(dbMasterCompanyLocationToResp);
        }
        if (filters.mastergenderresp=='1') {
            let MasterGenders = await MasterGenderModel.findAll();
            masterResp.MasterGender = MasterGenders.map(dbMasterGenderToResp);
        }
        if (filters.masteremployeetyperesp=='1') {
            let MasterEmployeeTypes = await MasterEmployeeTypeModel.findAll();
            masterResp.MasterEmployeeType = MasterEmployeeTypes.map(dbMasterEmployeeTypeToResp);
        }
        if (filters.masterprojecttype=='1') {
            let MasterProjectTypes = await MasterProjectTypeModel.findAll();
            masterResp.MasterProjectType = MasterProjectTypes.map(dbMasterProjectTypeToResp);
        }
        
        return masterResp;

    }
    getParameterCaseInsensitive(object: Object, key: string): Object | undefined {
        const asLowercase = key.toLowerCase();
        let keys: string | undefined = Object.keys(object)
            .find(k => k.toLowerCase() === asLowercase);
        if (keys)
            return object[keys as keyof typeof object];
        return undefined;
    }
}

function dbEmployeeDetailsReqToModel(payload: EmployeeDetailsReq) {
    throw new Error('Function not implemented.');
}
