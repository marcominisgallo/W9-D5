import { Component } from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import FilmCategory from "./FilmCategory";
import MyHeading from "./MyHeading";

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <MyNavbar />
        </header>
        <main className="bg-dark">
          <MyHeading />
          <FilmCategory query="Family Guy" h4="Family Guy" />
          <FilmCategory query="Avengers" h4="Avengers" />
          <FilmCategory query="Star Wars" h4="Star wars" />
          <FilmCategory query="Mickey Mouse" h4="Mickey Mouse" />
        </main>
        <footer className="bg-dark ">
          <MyFooter />
        </footer>
      </>
    );
  }
}

export default Home;
