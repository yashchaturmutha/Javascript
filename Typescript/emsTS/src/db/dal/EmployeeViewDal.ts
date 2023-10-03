import { Op, QueryTypes } from 'sequelize'
import { isEmpty } from 'lodash'

import { CompanyProjectModel, EmployeeViewModel, MasterBusinessUnitModel, UserProjectMasterModel } from '../models/init-models'

import { RoleBUHead } from '../../common/constants';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { EmployeeViewResp, EmployeeViewSearchResp } from '../../interfaces/responses/EmployeeViewResp';
import { dbEmployeeViewModelToResp, dbEmployeeViewSearchModelToResp } from '../../mapper/EmployeeViewMapper';
import { EmployeeDetailsReq, EmployeeDetailsSearchReq, EmployeeSearchKeywordReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { DatabaseServices } from '../Database';
import { Helpers } from '../../common/Helpers';
import sequelize from 'sequelize';


export class EmployeeViewDal {
    async getById(id: number, tokenData:LoginDetailsResp): Promise<EmployeeViewResp> {

        //let whereBu: string = ' EmployeeDetailsId = :EmployeeDetailsId ';
        let whereBu: any = { EmployeeDetailsId: id};
        let replacementParam: any = { EmployeeDetailsId: id }
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            whereBu.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
            //whereBu += ' and HeadEmployeeId = :HeadEmployeeId'; ;
            //replacementParam.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
        }
        // const objEmployeeDetails = await DatabaseServices.getSequelize().query("SELECT * FROM EmployeeView where " + whereBu, 
        // { type: QueryTypes.SELECT, plain: true,  raw: true,
        //     replacements: replacementParam
        // });
        // let objEmployeeDetails = await EmployeeViewModel.findOne({
        //     where: whereBu,
            
        // });

        const objEmployeeDetails = await EmployeeViewModel.findOne( {
            where:   whereBu,
            include: [
                {
                    required: true,
                    model: UserProjectMasterModel,
                    as: 'upm',
                    include: [
                        {
                            required: true,
                            model: CompanyProjectModel,
                            as: 'cp'                   
                        }
                    ]
                }
            ]
        });
        if (!objEmployeeDetails) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let retEmployeeDetails = dbEmployeeViewModelToResp(objEmployeeDetails);
        return retEmployeeDetails;
    }
    async getAll(filters: EmployeeDetailsSearchReq, tokenData:LoginDetailsResp): Promise<EmployeeViewResp[]> {
        let where: any = {};
        let whereProj: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            where = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        if(filters.keyword !== undefined && filters.keyword !== '')
        {
            where.FirstName = { [Op.like]: '%' + filters.keyword + '%' }
        }
        if(filters.bu !== undefined && filters.bu > 0)
        {
            where.MasterBusinessUnitId = filters.bu;
        }
        if(filters.pid !== undefined && filters.pid > 0)
        {
            whereProj.CompanyProjectId = filters.pid;
        }
        if(filters.isbillable !== undefined && filters.isbillable !== ''){
            whereProj.IsBillable = Number(filters.isbillable);
        }
        if(filters.empprjstatus !== undefined){
            if(filters.empprjstatus == 1)
            { // not completed
                //whereProj.UnAssignedDate =  { [Op.is]: null};
                whereProj.UnAssignedDate = {  [Op.or]: [  {  [Op.is]: null }, {[Op.gte]: sequelize.fn('GETDATE')} ] };
            } else if(filters.empprjstatus == 2)
            { // completed
                //{ [Op.and]: [deletedAtObject, options.where] }
                whereProj.UnAssignedDate = {  [Op.and]: [  {  [Op.not]: null }, {[Op.lt]: sequelize.fn('GETDATE')} ] };
                //whereProj.UnAssignedDate = {  [Op.not]: null };
            }
        }
        
        const objEmployees = await EmployeeViewModel.findAll( {
            where:   where,
            include: [
                {
                    required: true,
                    model: UserProjectMasterModel,
                    as: 'upm',
                    where: whereProj,
                    include: [
                        {
                            required: true,
                            model: CompanyProjectModel,
                            as: 'cp'                   
                        }
                    ]
                }
            ]
        });
        return objEmployees.map(dbEmployeeViewModelToResp);
        // let whereBu: string = ' 1 = 1 ';
        // let replacementParam: any = {  }
        // if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        // {
        //     whereBu += ' and HeadEmployeeId = :HeadEmployeeId'; ;
        //     replacementParam.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
        // }
        //  const options = {
        //     type: QueryTypes.SELECT,
        //     plain: false,  raw: false,
        //     replacements: replacementParam,
        //     hasJoin: true,
        //     model: EmployeeViewModel,
        //     primaryKey: 'EmployeeDetailsId',
        //     include: [{
        //         model: UserProjectMasterModel,
        //         as: 'upm',
        //         hasMany: true,
        //         foreignKey: 'EmployeeDetailsId'
        //     }]
        // };

        // const query = "SELECT ev.*,upm.* FROM EmployeeView ev"
        // + " inner join UserProjectMaster upm on upm.EmployeeDetailsId = ev.EmployeeDetailsId where " + whereBu;
        // const objEmployeeDetails = await DatabaseServices.getSequelize().query("SELECT ev.*,upm.* FROM EmployeeView ev"
        // + " inner join UserProjectMaster upm on upm.EmployeeDetailsId = ev.EmployeeDetailsId where " + whereBu, 
        // { type: QueryTypes.SELECT, plain: false,  raw: false,
        //     replacements: replacementParam,
        //     //model: EmployeeViewModel,
        //     mapToModel: true
        //     ,nest: true
        // });
        // if(objEmployeeDetails !== undefined)
        // {
        //     let retEmployeeDetailsResp: EmployeeViewResp[] = [];
        //     let employeedetails = this.mapDbObjectToModelStructure(objEmployeeDetails, options);
        //     retEmployeeDetailsResp = employeedetails?.map(dbEmployeeViewModelToResp);
        //     return retEmployeeDetailsResp;
        // }
        //return [];

    }
    async getAllEmployeesOnBench(filters: EmployeeDetailsSearchReq, tokenData:LoginDetailsResp): Promise<EmployeeViewResp[]> {
        
        
        let where: any = {};
        let whereProj: any = {};
        // if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        // {
        //     where = {
        //         HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
        //     }       

        // }
        if(filters.keyword !== undefined && filters.keyword !== '')
        {
            where.FirstName = { [Op.like]: '%' + filters.keyword + '%' }
        }
        if(filters.bu !== undefined && filters.bu > 0)
        {
            //where.MasterBusinessUnitId = filters.bu;
        }
        if(filters.pid !== undefined && filters.pid > 0)
        {
            whereProj.CompanyProjectId = filters.pid;
        }
        if(filters.isbillable !== undefined && filters.isbillable !== ''){
            whereProj.IsBillable = Number(filters.isbillable);
        }
        if(filters.empprjstatus !== undefined){
            if(filters.empprjstatus == 1)
            {
                whereProj.UnAssignedDate =  { [Op.is]: null};
            }
            if(filters.empprjstatus == 2)
            {
                whereProj.UnAssignedDate = { [Op.not]: null };
            }
        }
        
        // first query is fetching 
        // - all employees who are not in UserProjectMaster table
        // - employees who have completed all of there client projects (they may or may not be working on POC/ Study project ) 
        // - Project completion decided using unAssignedDate 
        const onBenchEmployees1Query = `SELECT DISTINCT ed.EmployeeDetailsId
        FROM EmployeeDetails ed
            LEFT JOIN UserProjectMaster upm ON ed.EmployeeDetailsId = upm.EmployeeDetailsId
            LEFT JOIN CompanyProject cp ON upm.CompanyProjectId = cp.CompanyProjectId
        WHERE (
                cp.ProjectType = 1
                OR upm.EmployeeDetailsId IS NULL
            )
            AND upm.UnAssignedDate < GETDATE()
            AND upm.EmployeeDetailsId IS NOT NULL
            AND NOT EXISTS (
                SELECT 1
                FROM UserProjectMaster upm2
                    INNER JOIN CompanyProject cp2 ON upm2.CompanyProjectId = cp2.CompanyProjectId
                WHERE upm.EmployeeDetailsId = upm2.EmployeeDetailsId
                    AND cp2.ProjectType = 1
                    AND (
                        upm2.UnAssignedDate > GETDATE()
                        OR upm2.UnAssignedDate IS NULL
                    )
            )
            AND ed.EmpStatus = 0 ;`;

        const onBenchEmployees1 = await DatabaseServices.getSequelize().query(onBenchEmployees1Query,
            {
                type: QueryTypes.SELECT, raw: true,
            });

        // Query fetching employee which are only working on POC/ Study projects.    
        const onBenchEmployees2Query = `SELECT DISTINCT ed.EmployeeDetailsId
        FROM EmployeeDetails ed
            INNER JOIN UserProjectMaster upm ON upm.EmployeeDetailsId = ed.EmployeeDetailsId
            INNER JOIN CompanyProject cp ON cp.CompanyProjectId = upm.CompanyProjectId
        WHERE cp.ProjectType != 1
            AND ed.EmployeeDetailsId NOT IN (
                SELECT DISTINCT upm.EmployeeDetailsId
                FROM UserProjectMaster upm
                    INNER JOIN CompanyProject cp ON cp.CompanyProjectId = upm.CompanyProjectId
                WHERE cp.ProjectType = 1
            )
            AND ed.EmpStatus = 0    ;`;     

        const onBenchEmployees2 = await DatabaseServices.getSequelize().query(onBenchEmployees2Query,
            {
                type: QueryTypes.SELECT, raw: true,
            });
        
        const allOnBenchEmployees = [...onBenchEmployees1, ...onBenchEmployees2].map((emp: any) => emp.EmployeeDetailsId);
        
        if (allOnBenchEmployees && allOnBenchEmployees.length > 0) {
            where.EmployeeDetailsId = {[Op.in]: allOnBenchEmployees} 
        }

        // 10 & 11 are HR and Management BU, we have to skip them from on bench list

        let skipBUForBench: number[] = [10, 11];
        where.MasterBusinessUnitId = {[Op.notIn]: skipBUForBench};

        const objEmployees = await EmployeeViewModel.findAll( {
            where:   where,
            include: [
                {
                    required: false,
                    model: UserProjectMasterModel,
                    as: 'upm',
                    where: whereProj,
                    include: [
                        {
                            required: false,
                            model: CompanyProjectModel,
                            as: 'cp'                   
                        }
                    ]
                }
            ]
        });
        return objEmployees.map(dbEmployeeViewModelToResp);
        

    }
    mapDbObjectToModelStructure(rows:any, options: any )
    {
        let mappedRows: any = [];
        for (let indexRow = 0; indexRow < rows.length; indexRow++) {
            let rowElement:any = rows[indexRow];
            let rowElementCurrent:any = rows[indexRow];
            const rowElementPresentIndex:number = mappedRows.findIndex((obj:any) => 
            obj[options.primaryKey] === rowElement[options.primaryKey]);

            if (rowElementPresentIndex === -1) {
            } else {
                rowElement = mappedRows[rowElementPresentIndex];
            }
            for (let indexOption = 0; indexOption < options.include.length; indexOption++) {
                const includeElement = options.include[indexOption];
                if(includeElement.model) {
                    let employeedetailsKeys = Object.keys(rowElementCurrent);
                    if(rowElement[includeElement.as] === undefined)
                    {
                        rowElement[includeElement.as] = {};
                        if(includeElement.hasMany !== undefined && includeElement.hasMany)
                        {
                            rowElement[includeElement.as] = [];
                        }
                    }
                    let includeObject:any = {};
                    employeedetailsKeys.forEach(element => {
                        if(includeElement.model.rawAttributes.hasOwnProperty(element))
                        {
                            includeObject[element] = rowElementCurrent[element];
                        }
                    });
                    if(includeElement.hasMany !== undefined && includeElement.hasMany)
                    {
                        rowElement[includeElement.as].push(includeObject);
                    } else {
                        rowElement[includeElement.as]=includeObject;
                    }
                }
            }
            if (rowElementPresentIndex === -1) {
                mappedRows.push(rowElement);
            } else {
                mappedRows[rowElementPresentIndex] = rowElement;
            }
        }
        return mappedRows;
    }
    async searchAll(filters: EmployeeSearchKeywordReq, tokenData:LoginDetailsResp): Promise<EmployeeViewSearchResp[]> {
        let retEmployeeViewSearchResp!: EmployeeViewSearchResp[];
        let whereBu: string = ' 1 = 1 ';
        let replacementParam: any = {  }
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            whereBu += ' and HeadEmployeeId = :HeadEmployeeId'; ;
            replacementParam.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
        }
        if (filters && filters.hasOwnProperty('keyword'))
        {
            whereBu += ' and ( ';
            let keyword:any = this.getParameterCaseInsensitive(filters, 'keyword');
            whereBu += ' FirstName like :keyword ';
            whereBu += ' or LastName like :keyword ';
            whereBu += ' or CompanyEmailAddress like :keyword ';
            whereBu += ' ) ';
            replacementParam.keyword = '%' +keyword + '%';
        } else {
            return retEmployeeViewSearchResp;
        }
        const objEmployeeDetails = await DatabaseServices.getSequelize().query("SELECT * FROM EmployeeView " 
        + " where " + whereBu, 
        { type: QueryTypes.SELECT, plain: false,  raw: true,
            replacements: replacementParam
        });
        retEmployeeViewSearchResp = objEmployeeDetails.map(dbEmployeeViewSearchModelToResp);
        return retEmployeeViewSearchResp;

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
