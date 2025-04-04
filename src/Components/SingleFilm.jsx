import { Component } from "react";
import { Col } from "react-bootstrap";

class SingleFilm extends Component {
  render() {
    return (
      <Col
        xs={12}
        md={6}
        lg={4}
        xl={2}
        className="gx-3 gy-md-4"
        style={{
          height: "20vh",
          backgroundImage: `url(${this.props.SFilm.Poster})`,
          backgroundPositionY: "15%",
        }}
      ></Col>
    );
  }
}

export default SingleFilm;
