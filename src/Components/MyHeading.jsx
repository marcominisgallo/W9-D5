import { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

class MyHeading extends Component {
  render() {
    return (
      <Container fluid className="text-white">
        <Row className="d-flex align-items-lg-baseline">
          <Col xs={6} lg={8}>
            <h1 className="ps-4">TV Shows</h1>
          </Col>
          <Col xs={3} lg={2} className="text-end text-white">
            <Dropdown className="text-white">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Horror</Dropdown.Item>
                <Dropdown.Item href="#">Romantic</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={3} lg={2} className="text-start">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="tbg-radio-1"
                value={1}
                variant="outline-secondary"
              >
                <i className="bi bi-card-list"></i>
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value={2}
                variant="outline-secondary"
              >
                <i className="bi bi-grid-3x2"></i>
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyHeading;
