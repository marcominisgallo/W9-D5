import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {<Home />}
      {/*<Profile />*/}
    </>
  );
}

export default App;
