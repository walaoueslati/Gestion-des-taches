
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_TASKS } from "./Queries/Task";
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./Mutations/Task";
import { GET_ALL_Projects } from "./Queries/Project";
import { CREATE_PROJECT , UPDATE_PROJECT,DELETE_PROJECT} from "./Mutations/Project";


const RootQuery = new GraphQLObjectType({
    name:"RotQuery",
    fields:{
        getAllTasks:GET_ALL_TASKS,
        getAllProjects:GET_ALL_Projects
    }
})
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createTask:CREATE_TASK,
        deleteTask:DELETE_TASK,
        updateTask:UPDATE_TASK,
        createProject:CREATE_PROJECT,
        deleteProject:DELETE_PROJECT,
        updateProject:UPDATE_PROJECT,
    }
})

export const schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})




