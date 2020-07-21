import React from 'react';
import PropTypes from 'prop-types';
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./blog.scss";
import * as types from '../../actions/types';

class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: types.PROFILE_REQUESTED,
      payload: {
        userId: this.props.pageState.auth.id
      }
    });
  }}

const Profil = (props) => {
  return (
    <div>
      <h1>Profile for {props.users}</h1>

      <ul>
        <li>Email address: {props.email}</li>
      </ul>
    </div>
  )
};

const ViewProfil = ({ post, auth, onDelete, onEdit }) => {
  return (
     <Container className="mt-4 viewPost">
        <Row>
           <Col className="text-center postTitle">
              <h2>{post.body}</h2>
           </Col>
        </Row>
        <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
           <Col>{post.body}</Col>
        </Row>
        <Row className="d-flex flex-column font-italic footerStyle">
           <Col> {post.title}</Col>
           
        </Row>
        {auth && (
           <Row className="mt-4">
              <Col className="text-center">
                 <Button
                    className="mr-2"
                    variant="outline-info"
                    onClick={onEdit}
                 >
                    Edit
                 </Button>
                 <Button variant="outline-danger" onClick={onDelete}>
                    Delete
                 </Button>
              </Col>
           </Row>
        )}
     </Container>
  );
};

Profil.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profil;