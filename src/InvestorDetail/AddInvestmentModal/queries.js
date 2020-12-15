import { gql } from "@apollo/client";

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies {
    company(limit: 100) {
      id
      name
    }
  }
`;
