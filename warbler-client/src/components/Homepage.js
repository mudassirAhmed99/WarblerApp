import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  // user not logged in
  if(!currentUser.isAuthenticated){
    return (
      <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>LOGGED IN!!</h1>
    </div>
  )
};

export default Homepage;
