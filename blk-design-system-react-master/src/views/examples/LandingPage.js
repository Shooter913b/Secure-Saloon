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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MyComponent from "./Map.js";
import * as firebase from "firebase";
import $ from "jquery"

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
class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }



  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-gridr">
              <Col lg="2" md="1">
              <UncontrolledDropdown>
    <DropdownToggle caret data-toggle="dropdown">
        Filters
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>None</DropdownItem>
        <DropdownItem>Caution</DropdownItem>
        <DropdownItem>Events</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>
              </Col>
              <Col lg="6" md="6">
              <form>
    <FormGroup>


          <Input type="select" name="select" id="exampleSelect1">
            <option>Caution</option>
            <option>Events</option>

          </Input>


    </FormGroup>
    </form>
              </Col>
              <Col lg="2" md="2">
              <Button>Add Marker</Button>
              </Col>
                </Row>
                <Row className="justify-content-md-center ">



  <MyComponent/>

                </Col>



              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">

                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">

                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">

                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">

                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">

                      <br />

                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">

            <Container>
              <Row className="justify-content-center">
                <Col lg="12">

                  <Row className="row-grid justify-content-center">
                    <Col lg="3">

                    </Col>
                    <Col lg="3">

                    </Col>
                    <Col lg="3">

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">

            <Container>

                <Col md="5">


                </Col>
                <Col md="6">
                  <div className="px-md-5">


                  </div>
                </Col>

            </Container>
          </section>
          <section className="section section-lg">


          </section>
          <section className="section section-lg section-coins">


          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage
