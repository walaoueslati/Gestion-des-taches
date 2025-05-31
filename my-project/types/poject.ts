import { ITask } from "./task"; 

export interface IProject {
  id: string;
  Nom: string;
  description: string; 
  tasks: ITask[]; 
}
