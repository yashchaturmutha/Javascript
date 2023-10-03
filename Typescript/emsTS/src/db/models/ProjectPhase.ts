import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProjectPhaseAttributes {
  ProjectPhaseId: number;
  ProjectPhase: string;
}

export type ProjectPhasePk = "ProjectPhaseId";
export type ProjectPhaseId = ProjectPhase[ProjectPhasePk];
export type ProjectPhaseOptionalAttributes = "ProjectPhaseId";
export type ProjectPhaseCreationAttributes = Optional<ProjectPhaseAttributes, ProjectPhaseOptionalAttributes>;

export class ProjectPhase extends Model<ProjectPhaseAttributes, ProjectPhaseCreationAttributes> implements ProjectPhaseAttributes {
  ProjectPhaseId!: number;
  ProjectPhase!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProjectPhase {
    return ProjectPhase.init({
    ProjectPhaseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProjectPhase: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProjectPhase',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProjectPhase",
        unique: true,
        fields: [
          { name: "ProjectPhaseId" },
        ]
      },
    ]
  });
  }
}
