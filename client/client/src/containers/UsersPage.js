import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Users from "../components/user/Users";
import {getUsers, getUserByName } from '../actions/userActions';

const UsersPage = ({
   isAuthenticated,
   getUserByName,
   getUsers,
   match,
   users
}) => {
   useEffect(() => {
      isAuthenticated ? getUsers() : getUserByName(match.params.user_name);
   }, [isAuthenticated, getUsers, getUserByName, match]);

   return <Users users={users} auth={isAuthenticated}  />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   users: state.user.users
});

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired,
    getUserByName: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getUserByName, getUsers }
)(UsersPage);
