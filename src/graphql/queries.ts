// get list of regions
// get list of pokemon by region
// get pokemon details by id

import { gql } from "@apollo/client";

export const GET_ALL_REGIONS = gql`
  query getAllRegions {
    region {
      name
      id
    }
  }
`;


