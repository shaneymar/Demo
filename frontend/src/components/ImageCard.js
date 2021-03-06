import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row} from 'react-bootstrap';

const ImageCard = ({image, deleteImage}) => {
   return(
 
    <Card style={{ width: '18rem', minHeight: '420px'}}>
    <Card.Img variant="top" 
    src= {image.urls.small}
    />
    <Card.Body>
      <Card.Title>{image.title}</Card.Title>
      <Card.Text>
        {image.description || image.alt_description}
      </Card.Text>
      <Button variant="primary" onClick={()=> deleteImage(image.id)}>Delete</Button>
    </Card.Body>

  </Card>
  
   )
};

export default ImageCard;