import { gql } from "@apollo/client";

// get conference by id
export const GET_CONFERENCE = gql`
  query Conference($conferenceID: ID!) {
  conference(id: $conferenceID) {
    name
    slogan
    organizer {
      name
      about
      image {
        url
      }
    }
    speakers {
      name
      aboutShort
      social {
        twitter
        linkedin
        github
        homepage
      }
      image {
        url
      }
    }
    schedules {
      day
      description
      intervals {
        begin
        end
        title
      }
    }
    sponsors {
      name
      aboutShort
      image {
        url
      }
    }
  }
}`;
