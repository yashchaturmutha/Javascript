import { DashboardResp } from '../interfaces/responses/DashboardResp';

export const dbBUSummaryToResp = (objBUSummary: any): DashboardResp => {    
    return {
        employeesCount: objBUSummary.employees_count,
        projectCount: objBUSummary.project_count,
        clientCount: objBUSummary.company_count
    }
}