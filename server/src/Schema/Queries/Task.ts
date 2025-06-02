 import { GraphQLList } from "graphql"
import { TaskType } from "../TypeDefs/Task"
import { Task } from "../../Entities/Task";

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  resolve: async () => {
    const tasks = await Task.find()
    return tasks
  }
}
