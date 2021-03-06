import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(userContext);
  console.log(loggedInUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/logIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
