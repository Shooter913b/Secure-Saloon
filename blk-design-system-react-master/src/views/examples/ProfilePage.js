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
                  <h1 className="profile-title text-left">Bob Scone</h1>
                  <h5 className="text-on-back">Bob</h5>
                  <p className="profile-description">
                    bobscone123@gmail.com
                  </p>
                  <div className="btn-wrapper profile pt-3">
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/profile.jpg")}
                      />
                      <h4 className="title">Profile</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Info
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Password
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Event
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">INFO</th>
                                <th className="header">ACCOUNT</th>
                                <th className="header">HOME</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Email/
                                Address:</td>
                                <td>bobscone123
                                @gmail.com</td>
                                <td>21 Oak Street, San Diego, CA</td>
                              </tr>
                              <tr>
                                <td>Usage:</td>
                                <td>Member since:
                                August 16, 2020</td>
                                <td>Current home since:
                                July 17, 2016</td>
                              </tr>
                              <tr>
                                <td>Status:</td>
                                <td>Active</td>
                                <td>Current Home</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Label sm="3">•</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input
                                  placeholder="Current Password"
                                  type="text"
                                />
                                <FormText color="default" tag="span">
                                  Type in current password
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">•</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="New Password" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">•</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="Rewrite New Password" type="text" />
                                <FormText color="default" tag="span">
                                  Make sure passwords match
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            id="left"
                            className="btn-simple btn-icon btn-round float-right"
                            color="primary">
                            <i className="fa fa-check" />
                          </Button>
                          <UncontrolledTooltip placement="left" target="left" delay={0}>
                              Due to security reasons, you are not allowed
                              to change the password of this account.
                          </UncontrolledTooltip>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Latest Events</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>I'm hosting a neighborhood bbq...</td>
                              </tr>
                              <tr>
                                <td>We are having a yardsale! Trying to...</td>
                              </tr>
                              <tr>
                                <td>So excited for the Junior Soccer...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
              </Row>
            </Container>
          </div>
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
