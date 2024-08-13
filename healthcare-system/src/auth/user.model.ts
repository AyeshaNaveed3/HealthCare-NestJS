import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number;
    

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type:DataType.STRING,
    })
    role:string;


}
