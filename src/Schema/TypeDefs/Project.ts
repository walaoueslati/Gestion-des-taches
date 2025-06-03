import { GraphQLObjectType,GraphQLID,GraphQLString, GraphQLList } from "graphql";
import { TaskType } from "./Task";
export const ProjectType =new GraphQLObjectType({
    name:"Project",
    fields:()=>({
    id: { type: GraphQLID },
    nom: { type: GraphQLString },
    description: { type: GraphQLString },
     tasks: {
      type: new GraphQLList(TaskType),
      resolve: async (parent) => {
        return await parent.getTasks();
      },
    },
    })
})

