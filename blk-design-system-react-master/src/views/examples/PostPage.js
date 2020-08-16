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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import Forms from "components/forms.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };


  render() {

    return (
      <>

        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Posts</h1>
                  <h5 className="text-on-back"><i className="fa fa-comment" /></h5>
                  <p className="profile-description">
                    Posts is where you can post about all kinds of information that you would like to share with your community.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Forms />
              </Row>
            </Container>
          </div>
        <Row className="justify-content-md-center">
        <Col lg="2" md="2" >
          <Card justify-content-md-center style={{height: '20rem'}}>

                <CardBody>
                <h3>Jhon Paul</h3>
                <b>Everyone beware of the harsh weather! I heard there is gonna be some serious downpour! Get your raingear out.
                :). Can't wait to see the weather with some hot chocolate!</b>
          </CardBody>
              </Card>
              </Col>

              <Col lg="2" md="2">
                <Card justify-content-md-center style={{height: '20rem'}}>
                      <CardBody>
                      <h3>Liam Hefly</h3>
                      <b>We are having a yardsale! Trying to sell some stuff in case anyone is interested! Come by anytime
                      during the day! Feel free to look around too.</b>
                </CardBody>
                    </Card>
                    </Col>

                    <Col lg="2" md="2">
                      <Card justify-content-md-center style={{height: '20rem'}}>
                            <CardBody>
                            <h3>lynda Bob</h3>
                            <b>Can anyone help me out with these logs? I can pay them $20 per hour to help me get these outta
                            the garage if anyone is interested.</b>
                      </CardBody>
                          </Card>
                          </Col>

                          <Col lg="2" md="2">
                            <Card justify-content-md-center style={{height: '20rem'}}>
                                  <CardBody>
                                  <h3>Bill Jobs</h3>
                                  <b>So excited for the neighborhood game today! Anyone else gonna come to the game? :)</b>
                            </CardBody>
                                </Card>
                                </Col>
                                </Row>


          <section className="section">
            <Container>
            </Container>
          </section>
          <Footer />
        </div>

      </>

    );
  }
}



export default ProfilePage;
