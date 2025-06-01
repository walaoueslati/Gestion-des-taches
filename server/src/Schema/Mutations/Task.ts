import { GraphQLString } from "graphql";
import { TaskType } from "../TypeDefs/Task";
import { Tasks } from "../../Entities/Tasks";


export const CREATE_TASK={
    type:TaskType,
    args: {
        title: { type: GraphQLString},
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        dueDate: { type:  GraphQLString},
      },
      async  resolve(parent:any, args:any) {
        const {title,description,status,dueDate}=args;
       await   Tasks.insert({title,description,status,dueDate});
        return args;
      }
}