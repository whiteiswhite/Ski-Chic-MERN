import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Input from "../form/Input";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import {
   Card,
   Button,
   Form,
   Container,
   Row,
   Col,
   Alert
} from "react-bootstrap";

const responseFacebook = (response) => {
   console.log(response);
 }

const Login = ({ message, loading, user, onChange, onBlur, onSubmit }) => {
   const { email, password, errors } = user;
   return (
      <Container>
         <Row>
            <Col className="mx-auto" sm={11} md={7} lg={5}>
               <Card className="my-4">
                  <Form
                     noValidate
                     onSubmit={onSubmit}
                     className="p-sm-3 p-xs-1"
                  >
                     <Card.Body>
                        <Card.Title
                           as="h3"
                           className="text-center theme-color mb-4 mt-2"
                        >
                           Login
                        </Card.Title>
                        {message.length > 0 && (
                           <Alert variant="success">{message}</Alert>
                        )}
                        <Input
                           name="email"
                           type="email"
                           placeholder="Enter Email"
                           value={email}
                           onChange={onChange}
                           onBlur={onBlur}
                           text={{
                              module: "login",
                              label: "Email",
                              error: errors.email
                           }}
                        />
                        <Input
                           name="password"
                           type="password"
                           placeholder="Enter Password"
                           value={password}
                           onBlur={onBlur}
                           onChange={onChange}
                           text={{
                              module: "login",
                              label: "Password",
                              error: errors.password
                           }}
                        />
                        <Button
                           variant="info"
                           type="submit"
                           className="mt-3"
                           disabled={loading}
                        >
                           Submit
                        </Button>
                        <Card.Text className="mt-2">
                           Don't have an account?{" "}
                           <Link to={"/signup"}>SignUp</Link>
                        </Card.Text>
                        <FacebookLogin
    appId="1088597931155576"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
                     </Card.Body>
                  </Form>
               </Card>
            </Col>
         </Row>
      </Container>
   );
};

Login.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   message: PropTypes.string.isRequired,
   loading: PropTypes.bool.isRequired
};

export default Login;
