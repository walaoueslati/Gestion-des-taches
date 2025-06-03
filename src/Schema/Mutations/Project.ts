import { GraphQLID, GraphQLString } from "graphql";
import { ProjectType } from "../TypeDefs/Project";
import { Projects } from "../../database/models/Projects";

export const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    nom: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const project = await Projects.create({
      nom: args.nom,
      description: args.description,
    });
    return project;
  },
};

export const DELETE_PROJECT = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const deleted = await Projects.destroy({
      where: { id: args.id },
    });

    if (deleted === 0) {
      throw new Error("Project not found");
    }

    return "Project deleted successfully";
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
    const project = await Projects.findByPk(args.id);

    if (!project) {
      throw new Error("Project not found");
    }

    project.nom = args.nom ?? project.nom;
    project.description = args.description ?? project.description;

    await project.save();

    return project;
  },
};
