import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class FilmRow extends Component {
  render() {
    return (
      <Row className="pb-4 g-3">
        {this.props.films.slice(0, 6).map((SFilm) => {
          return <SingleFilm key={SFilm.imdbID} SFilm={SFilm} />;
        })}
      </Row>
    );
  }
}

export default FilmRow;
