import React from 'react';
import PropTypes from 'prop-types';
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./blog.scss";
import * as types from '../../actions/types';
import getUserByName from '../../actions/userActions'

/*class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: types.PROFILE_REQUESTED,
      payload: {
        userId: this.props.pageState.auth.id
      }
    });
  }}*/

const ViewProfil = (user) => {
  return (
    <div>
      <h1>Profile aaaaaaaaaa {user.user_name}</h1>

      <ul>
        <li>Email address: {user.email}</li>
      </ul>
    </div>
  )
};



ViewProfil.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ViewProfil;
