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
  Col } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

          <div className="content-center brand">
            <img
                alt="..."
                width="100" height="100"
                className="img-fluid floating"
                src={require("assets/img/favicon.png")}
              />
            <h2 className="h1-seo" >Griffin</h2>
                        <Col md="12">
                        <Card>
                              <CardBody>
              <h4 className="d-none d-sm-block">

                Hello! Welcome to Griffin! We are a community based website. We made Griffin for people in
                communities to be able to communicate to others about there daily activities. It's basically a neighborhood-like mini
                blog for everyone to participate in! We know that since the Covid outbreak, it has been certainly hard to
                communitcate with others, so we developed this website for everyone to be able to talk about their daily needs.
                You can do a variety of stuff on this blog such as ask others for assistance/help if needed, or you can just talk about
                your daily errands/family updates. It's a good way for a large amount of people from a community to be able to communicate
                with one another. Now lets get to the security part of this website. It can help people talk to one another when a
                dangerous situation of sorts is going down. I will provide two examples. One is incase there is a natural
                disaster/dangerous weather outside about to come about, neighbors can inform others incase some people are not
                informed. Another example is if someone is robbing/has ill intentions against someone, they can report it to the police,
                along with everyone else in a quick manner. Now that we have finished explaining what we do, now we shall get into how
                you can sign up along with your family/neighbors: 1. Have you or your neighbors give in the info (log in username)
                in a form we provide. 2. We will either approve of this form/deny which will be told to you via email. Once approved we will
                give further info. Have fun with this website and welcome to Griffin!

            </h4>
            </CardBody>
            </Card>
            </Col>
          </div>

      </div>
    );
  }
}

export default PageHeader;
