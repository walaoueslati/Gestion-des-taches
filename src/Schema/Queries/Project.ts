import { GraphQLList } from "graphql";
import { ProjectType } from "../TypeDefs/Project";
import { Projects } from '../../database/models/Projects';
import { Task } from "../../database/models/Task";

export const GET_ALL_Projects = {
  type: new GraphQLList(ProjectType),
  resolve: async () => {
    return await Projects.findAll({
      include: [Task], 
    });
  },
};
