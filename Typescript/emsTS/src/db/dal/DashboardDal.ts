
import { CompanyProjectModel, EmployeeViewModel, ClientsModel, MasterBusinessUnitModel } from '../models/init-models';
import { Op } from 'sequelize';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { RoleBUHead } from '../../common/constants';
import { DashboardResp } from '../../interfaces/responses/DashboardResp';
import { Helpers } from '../../common/Helpers';
// import { dbBUSummaryToResp } from '../../mapper/DashboardResp.Mapper';

export class DashboardDal {
    async getBUSummary(tokenData: LoginDetailsResp): Promise<DashboardResp> {
        let whereEmp: any = {};
        let wherePro: any = {};
        let whereCli: any = {};
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)) {
            whereEmp.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
            whereBu.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
            // whereCli.HeadEmployeeId = tokenData.EmployeeDetails.EmployeeDetailsId;
        }
        // if EmpStatus is 1 then its a Ex-employee , 0 means its active employee 
        whereEmp.EmpStatus = 0;
        wherePro.projectstatus = { [Op.ne] : -1};
        whereCli.ClientStatus = 1;
        
        const employeeCountPromise = EmployeeViewModel.count({
            where: whereEmp,
            distinct: true,
            col: "EmployeeDetailsId",
        });
        // logging: console.log

        const projectCountPromise = CompanyProjectModel.count({
            where: wherePro,
            distinct: true,
            col: "CompanyProjectId",
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where: whereBu
                },
            ],
        })
        const clientCountPromise = ClientsModel.count(
            {
                where: whereCli,
                distinct: true,
                col: "ClientId",
                include: [
                    {
                        as: "cp",
                        model: CompanyProjectModel,
                        required: true,
                        include: [{
                            as: "mbu",
                            model: MasterBusinessUnitModel,
                            where: whereBu
                        }]
                    }
                ]
            }
        );

        const [employeeCount, projectCount, clientCount] = await Promise.all([
            employeeCountPromise,
            projectCountPromise,
            clientCountPromise,
        ]);

        const retDashboardResp: DashboardResp = {
            employeesCount: employeeCount,
            projectCount: projectCount,
            clientCount: clientCount,
        }
        // let retCompanyProjectResp!: DashboardResp;
        // retCompanyProjectResp = dbBUSummaryToResp(objCompanyProjects);
        return retDashboardResp;
    }
}