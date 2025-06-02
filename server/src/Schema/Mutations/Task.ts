import { GraphQLID, GraphQLString } from "graphql";
import { TaskType } from "../TypeDefs/Task";
import { Task } from "../../Entities/Task";
import { Projects } from "../../Entities/Projects";


export const CREATE_TASK={
    type:TaskType,
    args: {
        title: { type: GraphQLString},
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        dueDate: { type:  GraphQLString},
        projectId: { type: GraphQLID },
      },
      async  resolve(parent:any, args:any) {
        const {title,description,status,dueDate,projectId}=args;
        const project = await Projects.findOne({ where: { id: projectId } });
    if (!project) {
      throw new Error("Project not found");
    }
       await   Task.insert({title,description,status,dueDate,project});
        return args;
      }
}


export const DELETE_TASK = {
  type: GraphQLString, 
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    await Task.delete(args.id);
    return "Task deleted successfully"; 
  },
};



export const UPDATE_TASK = {
  type: TaskType, 
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    dueDate: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const task = await Task.findOne({ where: { id: args.id } });

    if (!task) {
      throw new Error("Task not found");
    }

    task.title = args.title ?? task.title;
    task.description = args.description ?? task.description;
    task.status = args.status ?? task.status;
    task.dueDate = args.dueDate ?? task.dueDate;

    await task.save();

    return task;
  },
};