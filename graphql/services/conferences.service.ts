import { gql } from "@apollo/client";

// get all conferences
export const GET_CONFERENCES = gql`
    query getConferences {
  conferences {
    id
    name
    slogan
    startDate
    endDate
    schedules {
      day
    }
  }
}`;
