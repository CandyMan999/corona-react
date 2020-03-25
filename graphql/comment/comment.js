import db from "../../db/models";
import { gql } from "apollo-server-express";

export const commentResolver = async (parent, args) => {
  return await db.Comment.find();
};

export const commentDefs = gql`
  type Comment {
    _id: ID
    name: String!
    picture: String
    comment: String!
  }
`;
