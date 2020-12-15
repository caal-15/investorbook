import { gql } from "@apollo/client";

export const GET_COMPANY_DETAIL = gql`
  query GetInvestorDetail($id: Int!) {
    company: company_by_pk(id: $id) {
      id
      name
      investments {
        id
        amount
        investor {
          id
          name
        }
      }
    }
  }
`;
