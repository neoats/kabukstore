import { gql } from "apollo-angular";

const GET_IMAGES = gql`
  query GetImages {
    imagesConnection {
      edges {
        node {
          pictureID {
            url
          }
        }
      }
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
    }
  }
`;
export {GET_USERS, GET_IMAGES}
