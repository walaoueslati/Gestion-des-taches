import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Tasks extends BaseEntity {
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
}
