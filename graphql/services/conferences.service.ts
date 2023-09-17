import { gql } from "@apollo/client";

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
