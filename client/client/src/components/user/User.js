import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./blog.scss";

const Users = ({ users }) => {
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <Card.Body className="postCover">
            <Card.Title className="text-center p-5">{users.user_name}</Card.Title>
         </Card.Body>
         <Card.Footer>
         </Card.Footer>
      </Card>
   );
};

Users.propTypes = {
   users: PropTypes.object.isRequired
};

export default Users;
