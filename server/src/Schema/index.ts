import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_TASKS } from "./Queries/Task";
import { CREATE_TASK } from "./Mutations/Task";


const RootQuery = new GraphQLObjectType({
    name:"RotQuery",
    fields:{
        getAllTasks:GET_ALL_TASKS
    }
})
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createTask:CREATE_TASK,
    }
})




export const schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})