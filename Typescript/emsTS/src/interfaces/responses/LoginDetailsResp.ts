import { AuthEmployeeDetailsResp } from "./EmployeeDetailsResp";

export interface LoginDetailsResp {
  EmployeeDetailsId: number;
  UserName: string;
  EmployeeDetails: AuthEmployeeDetailsResp;
}
