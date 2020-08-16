import React from "react"



function SignIn(){
  const FullName = "BobScone"
  const Email = "BobScone123@gmail.com"
  const Password = "pog123"

  if {
     FullName = "BobScone"
     Email = "BobScone123@gmail.com"
     Password = "pog123"

  }Button=Link to="/profile-page"

  else {
    !FullName && "none"
    !Email && "none"
    !Password && "none"
  }
return(
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
                  <Button className="btn-round" color="primary" size="lg">
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
  )
}




export default SignIn
