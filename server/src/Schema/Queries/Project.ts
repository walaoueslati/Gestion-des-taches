 import { GraphQLList } from "graphql"
import { ProjectType } from "../TypeDefs/Project"
import { Projects } from '../../Entities/Projects';

export const GET_ALL_Projects = {
  type: new GraphQLList(ProjectType),
  resolve: async () => {
     return await Projects.find({ relations: ["tasks"] });    
  }
}
