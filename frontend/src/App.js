import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

// eslint-disable-next-line no-unused-vars
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=mEJmF_uDqL_kF-6NJugs_xH1JPLz9J_jPOsEkRVMOJU`)
    .then((res) =>res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) =>{
      console.log(err)
    })
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
