// import {EmployeeDetailRoleOuput} from '../db/models/EmployeeDetailRole'
// import { CompanyProjectAttributes } from '../db/models/CompanyProject'
// import { AuthEmployeeDetailsResp, CompanyProjectResp, EmployeeDetailRoleResp, EmployeeDetailsResp, LoginDetailsResp, UserProjectMasterResp } from '../interfaces/responses'
// import { LoginDetailsAttributes } from '../db/models/LoginDetails'
// import { UserProjectMasterAttributes } from '../db/models/UserProjectMaster'
// import { EmployeeDetailsAttributes } from '../db/models/EmployeeDetails'
// import { DailyAttendanceAttributes } from '../db/models/DailyAttendance'
// import { DailyAttendanceRegularizeAttributes } from '../db/models/DailyAttendanceRegularize'
// import { DailyAttendanceRegularizeLeadersAttributes } from '../db/models/DailyAttendanceRegularizeLeaders'
// import { DailyTaskAttributes } from '../db/models/DailyTask'
// import { DailyAttendanceRegularizeLeadersResp } from '../interfaces/responses/DailyAttendanceRegularizeLeadersResp.interface'
// import { DailyAttendanceRegularizeResp } from '../interfaces/responses/DailyAttendanceRegularizeResp.interface'
// import { DailyAttendanceResp } from '../interfaces/responses/DailyAttendanceResp.interface'
// import { DailyTaskResp } from '../interfaces/responses/DailyTaskResp.interface'

// export const dbModelToEmployeeRoles = (employeeDetailRole: EmployeeDetailRoleOuput): EmployeeDetailRoleResp => {
//     return {
//         EmployeeDetailRoleId: employeeDetailRole.EmployeeDetailRoleId,
//         EmployeeDetailsId: employeeDetailRole.EmployeeDetailsId,
//         MasterRoleId: employeeDetailRole.MasterRoleId,
//     }
// }

// export const dbModelToCompanyProject = (objCompanyProject: CompanyProjectAttributes | undefined): CompanyProjectResp|null => {
//     if(objCompanyProject=== undefined)  { 
//         return null;
//     }
//     return {
//         CompanyProjectId:objCompanyProject.CompanyProjectId,
//         ProjectName:objCompanyProject.ProjectName,
//         ProjectTechnology:objCompanyProject.ProjectTechnology,
//         ProjectPhaseId:objCompanyProject.ProjectPhaseId,
//         ProjectStartDate:objCompanyProject.ProjectStartDate,
//         ProjectEndDate:objCompanyProject.ProjectEndDate,
//         projectstatus:objCompanyProject.projectstatus,
//         ClientName:objCompanyProject.ClientName,
//     }
// }

// // export const dbModelToLoginDetails = (objLoginDetails: LoginDetailsAttributes): LoginDetailsResp => {
// //     return {
        
// //         LoginDetailsId:objLoginDetails.LoginDetailsId,
// //         EmployeeDetailsId:objLoginDetails.EmployeeDetailsId,
// //         UserName:objLoginDetails.UserName,
// //         SecurityQuetionId:objLoginDetails.SecurityQuetionId,
// //         EmployeeDetails: dbAuthModelToEmployeeDetails(objLoginDetails.EmployeeDetail)
// //     }
// // }

// export const dbModelToUserProjectMaster = (objUserProjectMaster: UserProjectMasterAttributes): UserProjectMasterResp => {
    
//     return {
        
// UserProjectMasterId:objUserProjectMaster.UserProjectMasterId,
// EmployeeDetailsId:objUserProjectMaster.EmployeeDetailsId,
// CompanyProjectId:objUserProjectMaster.CompanyProjectId,
// ReportToEmployeeId:objUserProjectMaster.ReportToEmployeeId,
// LastProjectRemark:objUserProjectMaster.LastProjectRemark,
// AssignedDate:objUserProjectMaster.AssignedDate,
// UnAssignedDate:objUserProjectMaster.UnAssignedDate,
// IsBillable:objUserProjectMaster.IsBillable,
// RateType:objUserProjectMaster.RateType,
// Rate:objUserProjectMaster.Rate,
// CompanyProject: dbModelToCompanyProject(objUserProjectMaster.CompanyProject),

//     }
// }

// export const dbModelToEmployeeDetails = (objEmployeeDetails?: EmployeeDetailsAttributes): EmployeeDetailsResp => {
//     if(objEmployeeDetails=== undefined) {
//         return { EmployeeDetailsId: -1 , EmployeeCodeId: '', FirstName:''
//         , MiddleName:'' , LastName:''
//         };
//     }
//     return {
//         EmployeeDetailsId:objEmployeeDetails.EmployeeDetailsId,
//         EmployeeCodeId:objEmployeeDetails.EmployeeCodeId,
//         FirstName:objEmployeeDetails.FirstName,
//         MiddleName:objEmployeeDetails.MiddleName,
//         LastName:objEmployeeDetails.LastName,
//         MasterGenderId:objEmployeeDetails.MasterGenderId,
//         DOB:objEmployeeDetails.DOB,
//         MobileNo:objEmployeeDetails.MobileNo,
//         LandlineNo:objEmployeeDetails.LandlineNo,
//         EmailId:objEmployeeDetails.EmailId,
//         CurrentAddress:objEmployeeDetails.CurrentAddress,
//         ResidentialAddress:objEmployeeDetails.ResidentialAddress,
//         PassportNo:objEmployeeDetails.PassportNo,
//         PassportValidity:objEmployeeDetails.PassportValidity,
//         BloodGroup:objEmployeeDetails.BloodGroup,
//         Photo:objEmployeeDetails.Photo,
//         Image:objEmployeeDetails.Image,
//         EmpStatus:objEmployeeDetails.EmpStatus,
//         CompanyEmailAddress:objEmployeeDetails.CompanyEmailAddress,
//         Location:objEmployeeDetails.Location

//     }
// }

// // export const dbAuthModelToEmployeeDetails = (objEmployeeDetails?: EmployeeDetailsAttributes): AuthEmployeeDetailsResp => {
// //     if(objEmployeeDetails=== undefined) {
// //         return { EmployeeDetailsId: -1 , EmployeeCodeId: '', FirstName:''
// //         , MiddleName:'' , LastName:''
// //         };
// //     }
// //     return {
// //         EmployeeDetailsId:objEmployeeDetails.EmployeeDetailsId,
// //         EmployeeCodeId:objEmployeeDetails.EmployeeCodeId,
// //         FirstName:objEmployeeDetails.FirstName,
// //         MiddleName:objEmployeeDetails.MiddleName,
// //         LastName:objEmployeeDetails.LastName,
// //         EmpStatus:objEmployeeDetails.EmpStatus,
// //         CompanyEmailAddress:objEmployeeDetails.CompanyEmailAddress,
// //         Location:objEmployeeDetails.Location
// //     }
// // }

// export const dbModelToDailyAttendanceRegularize = (objDailyAttendanceRegularize: DailyAttendanceRegularizeAttributes): DailyAttendanceRegularizeResp => {
//     return {
        
// DailyAttendanceRegularizeId:objDailyAttendanceRegularize.DailyAttendanceRegularizeId,
// FromEmployeeDetailsId:objDailyAttendanceRegularize.FromEmployeeDetailsId,
// In_time:objDailyAttendanceRegularize.In_time,
// Out_Time:objDailyAttendanceRegularize.Out_Time,
// Status:objDailyAttendanceRegularize.Status,
// RegularizeStatus:objDailyAttendanceRegularize.RegularizeStatus,
// CreatedOn:objDailyAttendanceRegularize.CreatedOn,
// UpdatedOn:objDailyAttendanceRegularize.UpdatedOn,
// UpdateBy:objDailyAttendanceRegularize.UpdateBy,

//     }
// }


// export const dbModelToDailyAttendance = (objDailyAttendance: DailyAttendanceAttributes): DailyAttendanceResp => {
//     return {
        
// AttendanceId:objDailyAttendance.AttendanceId,
// EmployeeDetailsId:objDailyAttendance.EmployeeDetailsId,
// In_time:objDailyAttendance.In_time,
// Out_Time:objDailyAttendance.Out_Time,
// Status:objDailyAttendance.Status,

//     }
// }

// export const dbModelToDailyAttendanceRegularizeLeaders = (objDailyAttendanceRegularizeLeaders: DailyAttendanceRegularizeLeadersAttributes): DailyAttendanceRegularizeLeadersResp => {
//     return {
        
// DailyAttendanceRegularizeLeadersId:objDailyAttendanceRegularizeLeaders.DailyAttendanceRegularizeLeadersId,
// DailyAttendanceRegularizeId:objDailyAttendanceRegularizeLeaders.DailyAttendanceRegularizeId,
// ToEmployeeDetailsId:objDailyAttendanceRegularizeLeaders.ToEmployeeDetailsId,

//     }
// }

// export const dbModelToDailyTask = (objDailyTask: DailyTaskAttributes): DailyTaskResp => {
//     return {
        
// DailyTaskId:objDailyTask.DailyTaskId,
// EmployeeDetailsId:objDailyTask.EmployeeDetailsId,
// CompanyProjectId:objDailyTask.CompanyProjectId,
// TaskDescription:objDailyTask.TaskDescription,
// TaskHour:objDailyTask.TaskHour,
// TaskDate:objDailyTask.TaskDate,
// TaskStatus:objDailyTask.TaskStatus,
// BlockingIssues:objDailyTask.BlockingIssues,
// PersonResponsibleForBlock:objDailyTask.PersonResponsibleForBlock,

//     }
// }

