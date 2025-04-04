import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import FilmCategory from "./Components/FilmCategory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <FilmCategory query="Harry Potter" h4="Harry Potter" />
      </main>
      <footer className="bg-dark ">
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
