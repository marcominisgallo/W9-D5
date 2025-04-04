import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import FilmCategory from "./Components/FilmCategory";
import MyHeading from "./Components/MyHeading";

function App() {
  const [count, setCount] = useState(0);

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

export default App;
