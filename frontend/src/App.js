import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/footer";

// eslint-disable-next-line no-unused-vars
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=mEJmF_uDqL_kF-6NJugs_xH1JPLz9J_jPOsEkRVMOJU`)
    .then((res) =>res.json())
    .then((data) => {
      
      setImages([data, ...images])
      
    })
    .catch((err) =>{
      console.log(err)
    })
    setWord('');
  };

  return (
    <div>
      <Header title="REACT DEVELOPMENT" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Footer />
    </div>
  );
};

export default App;
