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
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import { GoogleMap, LoadScript } from '@react-google-maps/api'; import MyComponent from "./Map.js";


const mapStyles = {
  width: '100%',
  height: '100%'
};
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
              <Row className="row-grid justify-content-between align-items-center text-left">
<Col lg="12" md="12">

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
