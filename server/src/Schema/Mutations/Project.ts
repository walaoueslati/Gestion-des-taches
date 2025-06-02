import { GraphQLID, GraphQLString } from "graphql";
import { ProjectType } from "../TypeDefs/Project";
import { Projects } from "../../Entities/Projects";


export const CREATE_PROJECT={
    type:ProjectType,
    args: {
        nom: { type: GraphQLString},
        description: { type: GraphQLString },
        
      },
      async  resolve(parent:any, args:any) {
        const {nom,description}=args;
       await   Projects.insert({nom,description});
        return args;
      }
}


export const DELETE_PROJECT = {
  type: GraphQLString, 
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    await Projects.delete(args.id);
    return "project deleted successfully"; 
  },
};



export const UPDATE_PROJECT = {
  type: ProjectType, 
  args: {
    id: { type: GraphQLID },
    nom: { type: GraphQLString },
    description: { type: GraphQLString },
    
  },
  async resolve(_: any, args: any) {
    const project = await Projects.findOne({ where: { id: args.id } });

    if (!project) {
      throw new Error("Task not found");
    }

    project.nom = args.nom ??project.nom;
    project.description = args.description ??project.description; 
    await project.save();

    return project;
  },
};