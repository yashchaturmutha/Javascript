import { Op, Sequelize } from 'sequelize'
import { isEmpty } from 'lodash'

import { CurrentCompanyDetailsModel, DesignationMasterModel, EmployeeDetailsModel, MasterBusinessUnitModel } from '../models/init-models'
import { EmployeeDetailsReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { EmployeeDetailsResp } from '../../interfaces/responses/EmployeeDetailsResp';
import { dbEmployeeDetailsModelToResp } from '../../mapper/EmployeeDetailsMapper';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { RoleBUHead } from '../../common/constants';
import { CompanyProjectResp } from '../../interfaces/responses/CompanyProjectResp.interface';
import { Helpers } from '../../common/Helpers';


export class EmployeeDetailsDal {

    // async create(payload: EmployeeDetailsReq): Promise<EmployeeDetailsResp> {
    //     let oEmployeeDetails = dbEmployeeDetailsReqToModel(payload);
    //     const objEmployeeDetails = await EmployeeDetailsModel.create(oEmployeeDetails);
    //     let retEmployeeDetails = dbEmployeeDetailsModelToResp(objEmployeeDetails);
    //     return retEmployeeDetails;
    // }

    // async findOrCreate(payload: EmployeeDetailsReq): Promise<EmployeeDetailsResp> {
    //     let oEmployeeDetails = dbEmployeeDetailsReqToModel(payload);
    //     const objEmployeeDetails = await EmployeeDetailsModel.findOrCreate({
    //         where: {
    //             Id: oEmployeeDetails.Id
    //         },
    //         defaults: oEmployeeDetails
    //     });
    //     let retEmployeeDetails = dbEmployeeDetailsModelToResp(objEmployeeDetails);
    //     return retEmployeeDetails;
    // }

    async getById(id: number, tokenData:LoginDetailsResp): Promise<EmployeeDetailsResp> {

        // let whereBu: any = {};
        // if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        // {
        //     whereBu = {
        //         HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
        //     }       
        // }
        //const objEmployeeDetails = await EmployeeDetailsModel.findByPk(id)
        let objEmployeeDetails:any = await EmployeeDetailsModel.findOne({
            where: { 
                'EmployeeDetailsId': id
            },
            include:{
                model: CurrentCompanyDetailsModel,
                as: "CurrentCompanyDetails",
                required: false,
                // attributes: [],
                include:[{
                    model: DesignationMasterModel,
                    as: "DesignationMaster",
                    required: true,
                    // attributes: []
                }]
            }
            // include: [
            //     {
            //         as: "mbu",
            //         model: MasterBusinessUnitModel,
            //         where:   whereBu     
            //     }
            // ]
        });
        if (!objEmployeeDetails) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let retEmployeeDetails = dbEmployeeDetailsModelToResp(objEmployeeDetails);

        return retEmployeeDetails;
    }

    // async deleteById(EmployeeDetailsId: number): Promise<boolean> {
    //     const deletedEmployeeDetailsCount = await EmployeeDetailsModel.destroy({
    //         where: { EmployeeDetailsId }
    //     })

    //     return !!deletedEmployeeDetailsCount;
    // }

    async getAll(filters: EmployeeDetailsReq, tokenData:LoginDetailsResp): Promise<EmployeeDetailsResp[]> {
        let where: any = {};

        /*if(filters?.Id)
        {
            where.Id = filters?.Id;
        }
        if(filters?.Name)
        {
            let temp = '%' + filters?.Name + '%';
            where.Name = { [Op.like] : temp};
        }*/
        {
            if (filters && filters.hasOwnProperty('employeedetailsid')) {
                where.EmployeeDetailsId = this.getParameterCaseInsensitive(filters, 'employeedetailsid');
            }
            if (filters && filters.hasOwnProperty('employeecodeid')) {
                where.EmployeeCodeId = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'employeecodeid') + '%' }
            }
            if (filters && filters.hasOwnProperty('firstname')) {
                where.FirstName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'firstname') + '%' }
            }
            if (filters && filters.hasOwnProperty('middlename')) {
                where.MiddleName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'middlename') + '%' }
            }
            if (filters && filters.hasOwnProperty('lastname')) {
                where.LastName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'lastname') + '%' }
            }
            if (filters && filters.hasOwnProperty('mastergenderid')) {
                where.MasterGenderId = this.getParameterCaseInsensitive(filters, 'mastergenderid');
            }
            if (filters && filters.hasOwnProperty('dob')) {
                where.DOB = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'dob') + '%' }
            }
            if (filters && filters.hasOwnProperty('mobileno')) {
                where.MobileNo = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'mobileno') + '%' }
            }
            if (filters && filters.hasOwnProperty('landlineno')) {
                where.LandlineNo = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'landlineno') + '%' }
            }
            if (filters && filters.hasOwnProperty('emailid')) {
                where.EmailId = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'emailid') + '%' }
            }
            if (filters && filters.hasOwnProperty('currentaddress')) {
                where.CurrentAddress = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'currentaddress') + '%' }
            }
            if (filters && filters.hasOwnProperty('residentialaddress')) {
                where.ResidentialAddress = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'residentialaddress') + '%' }
            }
            if (filters && filters.hasOwnProperty('passportno')) {
                where.PassportNo = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'passportno') + '%' }
            }
            if (filters && filters.hasOwnProperty('passportvalidity')) {
                where.PassportValidity = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'passportvalidity') + '%' }
            }
            if (filters && filters.hasOwnProperty('bloodgroup')) {
                where.BloodGroup = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'bloodgroup') + '%' }
            }
            if (filters && filters.hasOwnProperty('photo')) {
                where.Photo = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'photo') + '%' }
            }
            if (filters && filters.hasOwnProperty('image')) {
                where.Image = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'image') + '%' }
            }
            if (filters && filters.hasOwnProperty('empstatus')) {
                where.EmpStatus = this.getParameterCaseInsensitive(filters, 'empstatus');
            }
            if (filters && filters.hasOwnProperty('companyemailaddress')) {
                where.CompanyEmailAddress = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'companyemailaddress') + '%' }
            }
            if (filters && filters.hasOwnProperty('location')) {
                where.Location = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'location') + '%' }
            }
        }
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        let objEmployeeDetailss = await EmployeeDetailsModel.findAll({
            where: where,
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                }
            ]
        });
        let retEmployeeDetailsResp!: EmployeeDetailsResp[];
        retEmployeeDetailsResp = objEmployeeDetailss.map(dbEmployeeDetailsModelToResp);
        return retEmployeeDetailsResp;

    }

    async getEmployeeNamesAndDesignation(CompanyProject:any,tokenData:LoginDetailsResp){

        for(let element of CompanyProject.SOWDetails){
            for(let item of element.BillableEmployees){
                const objEmployeeDetails:EmployeeDetailsResp=await this.getById(item.EmployeeDetailsId,tokenData);
                item.FirstName=objEmployeeDetails.FirstName;
                item.MiddleName=objEmployeeDetails.MiddleName;
                item.LastName=objEmployeeDetails.LastName;
                item.Designation=objEmployeeDetails.Designation;
            }    
        }

        for(let item of CompanyProject.NonBillableEmployees){
            const objEmployeeDetails:EmployeeDetailsResp=await this.getById(item.EmployeeDetailsId,tokenData);
            item.FirstName=objEmployeeDetails.FirstName;
            item.MiddleName=objEmployeeDetails.MiddleName;
            item.LastName=objEmployeeDetails.LastName;
            item.Designation=objEmployeeDetails.Designation;
        }    
        
        return CompanyProject;
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
