import React from "react";
import { Link } from "react-router-dom";
import Users from "./User";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import "./blog.scss";

const listUsers = ({ users }) => {
   return (
      <div className="grid-container mx-3">
         {users.map(user => (
            <Link to={`/users/${user._id}`} key={user._id}>
               <Users users={users} />
            </Link>
         ))}
      </div>
   );
};

listUsers.propTypes = {
   users: PropTypes.array.isRequired
};

export default listUsers;
