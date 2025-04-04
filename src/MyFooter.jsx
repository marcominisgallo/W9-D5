import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col
              xs={12}
              md={12}
              lg={8}
              xl={8}
              className="offset-lg-2 text-white"
            >
              <i className="bi bi-facebook me-3 fs-5"></i>
              <i className="bi bi-instagram me-3 fs-5"></i>
              <i className="bi bi-twitter me-3 fs-5"></i>
              <i className="bi bi-youtube fs-5"></i>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col xs={3} md={3} lg={2} xl={2} className="offset-lg-2">
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Audio and Subtitles
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Media Center
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Privacy
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Contact Us
              </a>
            </Col>
            <Col xs={3} md={3} lg={2} xl={2}>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Audio Description
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Investor Relation
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Legal Notice
              </a>
            </Col>
            <Col xs={3} md={3} lg={2} xl={2}>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Help Center
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Jobs
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Cookie Preferences
              </a>
            </Col>
            <Col xs={3} md={3} lg={2} xl={2}>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Gift Cards
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Terms of Use
              </a>
              <a
                className="d-block text-decoration-none text-secondary"
                href="#"
              >
                Corporate Information
              </a>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col className="offset-lg-2">
              <Button variant="dark" className="btn-outline-secondary">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="offset-lg-2">
              <small className="mt-4 text-secondary">
                &copy; 1997-2019 Netflix, Inc.
              </small>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyFooter;
