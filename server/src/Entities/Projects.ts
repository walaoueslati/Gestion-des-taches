import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Task } from './Task';

@Entity()
export class Projects extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nom!: string;

  @Column()
  description!: string;
  
  
  @OneToMany(() => Task, task => task.project)
  tasks!: Task[];
}


