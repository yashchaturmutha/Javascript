import { CompanyProjectMilestoneReq, CompanyProjectNonBillableReq } from "../interfaces/requests/CompanyProjectReq.interface"
import { CompanyProjectReq } from "../interfaces/requests/CompanyProjectReq.interface"
import { ProjectMilestoneReq } from "../interfaces/requests/ProjectMilestoneReq.interface"
import { SOWDetailsReq } from "../interfaces/requests/SOWDetailsReq.interface"
import { dbUserProjectMasterReqToModel } from "./UserProjectMasterReq.Mapper"

export const dbCompanyProjectReqToModel = (objCompanyProject: Partial<CompanyProjectReq>): any => {

    
    return {

        CompanyProjectId: objCompanyProject.CompanyProjectId,
        ProjectName: objCompanyProject.ProjectName,
        ProjectTechnology: objCompanyProject.ProjectTechnology,
        ProjectPhaseId: objCompanyProject.ProjectPhaseId,
        ProjectStartDate: objCompanyProject.ProjectStartDate,
        ProjectEndDate: objCompanyProject.ProjectEndDate,
        projectstatus: objCompanyProject.projectstatus,
        ClientName: objCompanyProject.ClientName,
        MasterBusinessUnit: objCompanyProject.MasterBusinessUnit,
        ProjectType: objCompanyProject.ProjectType,
        ClientId: objCompanyProject.ClientId,
        TeamSize: objCompanyProject.TeamSize,
        Currency: objCompanyProject.Currency,
        BillingType: objCompanyProject.BillingType
    }
}


export const CompanyProjectNonBillableReqtoDB = (objCompanyProject: Partial<CompanyProjectReq>): any => {
    let userProjectMastersReq: any = [];
    if (objCompanyProject.NonBillableEmployees !== undefined) {
        // userProjectMastersReq = objCompanyProject.NonBillableEmployees.map(dbUserProjectMasterReqToModel);

        userProjectMastersReq = objCompanyProject.NonBillableEmployees.filter((element:any)=>{
            if(element.EmployeeDetailsId!=0 && element.AssignedDate!=""){
                return dbUserProjectMasterReqToModel(element);
            }
        });
    }
    return userProjectMastersReq;
}

export const CompanyProjectBillableReqtoDB = (objCompanyProject: Partial<CompanyProjectReq>): any => {
    let userProjectMastersReq: any = [];
    if (objCompanyProject.BillableEmployees !== undefined) {
        // userProjectMastersReq = objCompanyProject.NonBillableEmployees.map(dbUserProjectMasterReqToModel);

        userProjectMastersReq = objCompanyProject.BillableEmployees.filter((element:any)=>{
            
            if(element.EmployeeDetailsId!=0 && element.AssignedDate!=""){
                return dbUserProjectMasterReqToModel(element);
            }
        });
    }
    return userProjectMastersReq;
}
// export const CompanyProjectBillableReqtoDB = (objCompanyProject: Partial<SOWDetailsReq>): any => {
//     // let userProjectMastersReq: any = [];
//     // if (objCompanyProject.BillableEmployees !== undefined) {
//     //     userProjectMastersReq = objCompanyProject.BillableEmployees.map(dbUserProjectMasterReqToModel);
//     // }
//     return {
//         //upm: userProjectMastersReq,
//         SOWMasterId:objCompanyProject.SOWMasterId,
//     }
// }


