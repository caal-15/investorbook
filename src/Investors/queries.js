import { gql } from "@apollo/client";

export const GET_INVESTORS = gql`
  query GetInvestors($limit: Int!, $offset: Int!) {
    investor_aggregate {
      aggregate {
        count
      }
    }
    investor(limit: $limit, offset: $offset) {
      id
      name
      photo_thumbnail
      investments {
        company {
          id
          name
        }
      }
    }
  }
`;
