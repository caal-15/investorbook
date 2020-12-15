import { gql } from "@apollo/client";

export const GET_INVESTOR_DETAIL = gql`
  query GetInvestorDetail($id: Int!) {
    investor: investor_by_pk(id: $id) {
      id
      name
      photo_large
      investments {
        id
        amount
        company {
          id
          name
        }
      }
    }
  }
`;
