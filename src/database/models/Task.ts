import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Projects } from './Projects';

@Table({
  tableName: 'tasks',
  timestamps: true, 
  modelName:"tasks", 
})
export class Task extends Model{

    @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare id:number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare status: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  declare dueDate: Date;

  @ForeignKey(() => Projects)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare projectId: number;
  @BelongsTo(() => Projects)
  declare project: Projects;
}
