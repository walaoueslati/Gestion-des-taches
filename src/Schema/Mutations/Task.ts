import { GraphQLID, GraphQLString } from "graphql";
import { TaskType } from "../TypeDefs/Task";
import { Task } from "../../database/models/Task";
import { Projects } from "../../database/models/Projects";

export const CREATE_TASK = {
  type: TaskType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    projectId: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const { title, description, status, dueDate, projectId } = args;

    const project = await Projects.findByPk(projectId);
    if (!project) {
      throw new Error("Project not found");
    }

    const task = await Task.create({
      title,
      description,
      status,
      dueDate,
      projectId,
    });

    return task;
  }
};


export const DELETE_TASK = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const deleted = await Task.destroy({
      where: { id: args.id },
    });

    if (deleted === 0) {
      throw new Error("Task not found");
    }

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
    const task = await Task.findByPk(args.id);

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
