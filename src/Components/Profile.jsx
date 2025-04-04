import { Component } from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <>
        <header>
          <MyNavbar />
        </header>
        <main className="bg-dark pb-5">
          <Container className="pt-5 border-bottom border-secondary">
            <Row>
              <Col xs={12} md={10} lg={9} className="offset-md-1 offset-lg-2">
                <h1 className="text-white">Edit Profile</h1>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4 border-bottom border-secondary">
            <Row>
              <Col xs={3} lg={2} className="offset-md-1 offset-lg-2">
                <div>
                  <img
                    src="../../public/avatar.png"
                    alt="user-pic"
                    style={{ width: "80%" }}
                  />
                </div>
              </Col>
              <Col xs={9} md={8} lg={6}>
                <Row className="border-bottom border-secondary">
                  <Col xs={12} className="mt-1">
                    <Button variant="secondary" className="w-100 text-start">
                      Strive Student
                    </Button>
                  </Col>
                  <Col xs={12} className="mt-4 text-secondary">
                    <h5 className="fw-light">Language:</h5>
                  </Col>
                  <Col xs={12} className="mt-2">
                    <Dropdown className="text-white mb-3">
                      <Dropdown.Toggle
                        variant="outline-light"
                        id="dropdown-basic"
                      >
                        English
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                        <Dropdown.Item href="#">Italian</Dropdown.Item>
                        <Dropdown.Item href="#">Greek</Dropdown.Item>
                        <Dropdown.Item href="#">Chinese</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row className="mt-3 border-bottom border-secondary">
                      <Col xs={12}>
                        <h5 className="fw-light text-secondary">
                          Maturiry Settings:
                        </h5>
                      </Col>
                      <Col xs={12} className="mt-2">
                        <Button
                          variant="secondary"
                          className="text-start"
                          style={{ whiteSpace: "nowrap", width: "60%" }}
                        >
                          ALL MATURIRY RATINGS
                        </Button>
                      </Col>
                      <Col xs={12}>
                        <p className="mt-3 text-secondary">
                          Show titles of
                          <span className="fw-semibold">
                            all maturity ratings
                          </span>{" "}
                          for this profile.
                        </p>
                      </Col>
                      <Col xs={12}>
                        <Button
                          variant="outline-secondary"
                          className="px-3 py-1 mb-4"
                        >
                          EDIT
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row className="mt-3">
                      <Col xs={12}>
                        <h5 className="text-secondary">Maturiry Settings:</h5>
                      </Col>
                      <Col xs={12}>
                        <Form className="text-secondary">
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Autoplay next episode in a series on all devices."
                          />
                          <Form.Check // prettier-ignore
                            type="switch"
                            label="Autoplay previews while browsing on all devices."
                            id="custom-switch"
                          />
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4">
            <Row>
              <Col xs={3} className="text-end">
                <Button variant="light" className="text-black px-3 py-1 mb-4">
                  SAVE
                </Button>
              </Col>
              <Col xs={3} className="text-center">
                <Button variant="outline-secondary" className="px-3 py-1 mb-4">
                  CANCEL
                </Button>
              </Col>
              <Col xs={6} className="text-start">
                <Button variant="outline-secondary" className="px-3 py-1 mb-4">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="bg-dark ">
          <MyFooter />
        </footer>
      </>
    );
  }
}

export default Profile;
