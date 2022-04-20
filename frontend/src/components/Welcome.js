import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';

const Welcome = () => {
    return(
    <Jumbotron>
  <h1>Hello Users</h1>
  <p>
    This is a simple application that retrieves photo from unsplash.
  </p>
  <p>
    <Button bsStyle="primary" href="https://www.unsplash.com" target="_blank">Learn more</Button>
  </p>
</Jumbotron>
    );
};

export default Welcome;