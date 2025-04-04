import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";
import FilmRow from "./FilmRow";

const URL = "http://www.omdbapi.com/?apikey=b7acc9bd&s=";

class FilmCategory extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
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
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
        his.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.getFilmList();
  }

  render() {
    return (
      <Container fluid>
        <h4 className="ps-5 text-light">{this.props.h4}</h4>
        {this.state.isLoading && (
          <div className="text-center my-3">
            <Spinner variant="danger" animation="border" />
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger" className="text-center">
            <i className="bi bi-patch-exclamation-fill me-2"></i>
            Errore nel recupero dati
            <i className="bi bi-patch-exclamation-fill ms-2"></i>
          </Alert>
        )}
        <FilmRow films={this.state.films} />
      </Container>
    );
  }
}

export default FilmCategory;
