import React from "react";
import AuthGuard from "../client/components/wrappers/AuthGuard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const QUERY_PROFILE = gql`
  {
    me {
      id
      name
      email
    }
  }
`;

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>

      <Query query={QUERY_PROFILE}>
        {({ data, error, loading }) => {
          if (loading) return <div>Loading profile</div>;
          if (error) return <div>Something went wrong</div>;
          const profile = data.me;

          return (
            <div>
              <h2>{profile.name}</h2>
              <h3>{profile.email}</h3>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

//export default Profile;
export default AuthGuard(Profile);
