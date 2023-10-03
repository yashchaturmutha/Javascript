
export interface EmployeeDetailRoleResp {
  EmployeeDetailsId: number;
  MasterRoleId: number;
  MasterRoles: MasterRolesResp;
}

export interface MasterRolesResp {
  MasterRoleId: number;
  Name: string;
}