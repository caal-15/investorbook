import { gql } from "@apollo/client";

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies {
    company(limit: 100) {
      id
      name
    }
  }
`;

export const ADD_INVESTMENT = gql`
  mutation AddInvestment($investment: investment_insert_input!) {
    investment: insert_investment_one(object: $investment) {
      id
      amount
      company {
        id
        name
      }
    }
  }
`;
