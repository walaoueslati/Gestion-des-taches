import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm'
import { Projects } from './Projects';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  status!: 'To Do' | 'Doing' | 'Done';

  @Column({ type: 'date' })
  dueDate!: string;

  @ManyToOne(() => Projects, project => project.tasks, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'projectId' }) 
  project!: Projects;
}


