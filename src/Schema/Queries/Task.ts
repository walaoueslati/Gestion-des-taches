import { GraphQLList } from "graphql";
import { TaskType } from "../TypeDefs/Task";
import { Task } from "../../database/models/Task";

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  resolve: async () => {
    return await Task.findAll();
  },
};
