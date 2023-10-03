import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LocalIssueTrackerAttributes {
  Id: number;
  Issue?: string;
  Solution?: string;
  CreatedOn?: Date;
  Username?: string;
}

export type LocalIssueTrackerPk = "Id";
export type LocalIssueTrackerId = LocalIssueTracker[LocalIssueTrackerPk];
export type LocalIssueTrackerOptionalAttributes = "Id" | "Issue" | "Solution" | "CreatedOn" | "Username";
export type LocalIssueTrackerCreationAttributes = Optional<LocalIssueTrackerAttributes, LocalIssueTrackerOptionalAttributes>;

export class LocalIssueTracker extends Model<LocalIssueTrackerAttributes, LocalIssueTrackerCreationAttributes> implements LocalIssueTrackerAttributes {
  Id!: number;
  Issue?: string;
  Solution?: string;
  CreatedOn?: Date;
  Username?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof LocalIssueTracker {
    return LocalIssueTracker.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Issue: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Solution: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    CreatedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Username: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LocalIssueTracker',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LocalIssueTracker",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
