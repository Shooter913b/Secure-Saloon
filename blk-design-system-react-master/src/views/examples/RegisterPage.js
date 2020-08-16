/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { BrowserRouter, Route, Switch,History } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import * as firebase from "firebase";
import $ from "jquery"
function Redirect(){

}
var config = {
  apiKey: "AIzaSyBcJJWse21pjooAyILJk_sYLd4kdmnJItw",
 authDomain: "saloon-402e0.firebaseapp.com",
 databaseURL: "https://saloon-402e0.firebaseio.com",
 projectId: "saloon-402e0",
 storageBucket: "saloon-402e0.appspot.com",
 messagingSenderId: "490540225606",
 appId: "1:490540225606:web:ac41cbe77f187d0f1e6647",
 measurementId: "G-Q15BXVK72B"
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
let auth = firebase.auth()
let db = firebase.firestore()
auth.onAuthStateChanged(function(user) {
//if user exists, do the following
    if (user) {
      console.log(user.email);
      //Checks and retrieves the user with same email as somebody else in the database already
      db.collection('User').where("email", "==", user.email).get().then((snapshot) => {
        //for every document found
        snapshot.forEach((doc) => {
          //checks type of user (organ or vol)
            auth.history.push("/components");
        });
      });
    }
  });
  // function signOut(){
  //   firebase.auth().signOut().then(function() {
  //     console.log('Signed Out');
  //   }, function(error) {
  //     console.error('Sign Out Error', error);
  //   });
  // }
  //allows user to sign-in
  function signIn(){
    var username = $('#email').val();
    var password = $('#password').val();
    auth.signInWithEmailAndPassword(username, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(error);
    });
  }
  $('#password').keypress(function (e) {
   var key = e.which;
   if(key == 13){
      signIn();
    }
  });



class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"


    });
  };



  render() {

    return (

      <>


        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Login</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="password"
                              type="text"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                            />
                          </InputGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                      <Button className="btn-round" color="primary" size="lg" tag={Link} to="/">
                        Sign In
                      </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>

                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default RegisterPage;
