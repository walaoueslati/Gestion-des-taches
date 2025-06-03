import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';
import { Task } from './Task';

@Table({
  tableName: 'projects',
  timestamps: true,
  modelName: 'projects',
})
export class Projects extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare id :number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare nom: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @HasMany(() => Task)
  declare tasks: Task[];
  
}
