import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'patients' })
export class Patient extends Model<Patient> {
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
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.DATE,
  })
  dob: Date;

  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
  })
  address: string;

  


}
