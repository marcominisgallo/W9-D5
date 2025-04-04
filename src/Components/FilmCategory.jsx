import { Component } from "react";
import { Container } from "react-bootstrap";
import FilmRow from "./FilmRow";

const URL = "http://www.omdbapi.com/?apikey=b7acc9bd&s=";

class FilmCategory extends Component {
  state = {
    films: [],
  };
  getFilmList = () => {
    fetch(URL + this.props.query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          films: data.Search,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };

  componentDidMount() {
    this.getFilmList();
  }

  render() {
    return (
      <Container fluid>
        <h4 className="ps-5">{this.props.h4}</h4>
        <FilmRow films={this.state.films} />
      </Container>
    );
  }
}

export default FilmCategory;
