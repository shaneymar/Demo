import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row } from "react-bootstrap";
import Welcome from "./components/Welcome";

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
      
      setImages([{...data, title: word}, ...images])
      
    })
    .catch((err) =>{
      console.log(err)
    })
    setWord('');
  };

  const handleDeleteImage = (id) =>{
      setImages(images.filter((image) => image.id !== id))
  };

  return (
    <div>
      <Header title="FINDLAW" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <br/>
      <Container className="mt-4">
        {images.length ? 
        (
        <Row xs={1} md={3} lg={4}>
          {images.map( (image, i) => ( 
          <ImageCard key={i} image ={image} deleteImage = {handleDeleteImage} /> 
          ))}
         </Row> )
          : ( <Welcome /> 
          )}
      </Container>
    </div>
  );
};

export default App;
