import { GraphQLObjectType,GraphQLID,GraphQLString, GraphQLList } from "graphql";
import { TaskType } from "./Task";
import { Task } from "../../Entities/Task";
export const ProjectType =new GraphQLObjectType({
    name:"Project",
    fields:()=>({
    id: { type: GraphQLID },
    nom: { type: GraphQLString },
    description: { type: GraphQLString },
     tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent) {
        return Task.find({ where: { project: { id: parent.id } } });
      },
    },
    })
})

