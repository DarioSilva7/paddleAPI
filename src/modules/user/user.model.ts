import { DataTypes, Model } from "sequelize";
import { db } from "../../config/database";

class User extends Model {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public image!: string;
  public status!: string;
  public category!: string;
  public hasEmailActions!: boolean;
  public hasEmailReminder!: boolean;
  public teamId!: string;
  // public team!: Team;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize: db.sequelize,
  modelName: 'user'
});

export { User }