import { GraphQLObjectType,GraphQLID,GraphQLString } from "graphql";
export const TaskType =new GraphQLObjectType({
    name:"Task",
    fields:()=>({
        id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    
    })
})

