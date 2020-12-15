import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query GetCompanies($limit: Int!, $offset: Int!) {
    company_aggregate {
      aggregate {
        count
      }
    }
    company(limit: $limit, offset: $offset) {
      id
      name
      investments {
        investor {
          id
          name
        }
      }
    }
  }
`;
