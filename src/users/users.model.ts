import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}
