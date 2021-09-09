import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {Cat} from './interfaces/cat.interface'

@Table
export class Cats extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column(DataType.STRING)
  bloodType: Cat['bloodType'];
}
