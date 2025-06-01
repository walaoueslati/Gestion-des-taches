
 import { GraphQLList } from "graphql"
import { TaskType } from "../TypeDefs/Task"
import { Tasks } from "../../Entities/Tasks";

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  resolve: async () => {
    const tasks = await Tasks.find()
    return tasks
  }
}