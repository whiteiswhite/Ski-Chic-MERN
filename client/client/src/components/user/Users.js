import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Nav, Button, Container, Form } from "react-bootstrap";
import listUsers from "../user/listUsers";
import "./blog.scss";

const Users = ({ users, auth }) => {
   const inputRef = useRef(null);
   const [search, setSearch] = useState("");
   const [display, setDisplay] = useState(false);

   const handleChange = e => {
      setSearch(inputRef.current.value.toLowerCase());
   };

   // setting no post found after waiting for a second
   useEffect(() => {
      setTimeout(() => {
         if (users === 0) setDisplay(true);
      }, 1000);
   }, [users]);
   return (
      <React.Fragment>
         <div className="mx-3">
            <Nav className="mt-2 mb-2 float-right">
               <Form>
                  <Form.Group controlId="searchBar">
                     <Form.Control
                        type="text"
                        placeholder="LalalO"
                        style={{ height: 40 }}
                        ref={inputRef}
                        onChange={handleChange}
                     />
                  </Form.Group>
               </Form>
            </Nav>
         </div>
         {users > 0 ? (
            <listUsers
               users={users.filter(user =>
                  user.user_name.toLowerCase().includes(search)
               )}
            />
         ) : (
            display && (
               <Container
                  style={{ height: "50vh" }}
                  className="d-flex flex-column justify-content-center align-items-center"
               >
                  {" "}
                  <p className="text-secondary h3">No User Found !</p>
               </Container>
            )
         )}
      </React.Fragment>
   );
};

Users.propTypes = {
    auth: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
};

export default Users;
