import React from 'react';
import { Jumbotron, Button, Container, Row} from 'react-bootstrap';
import '../css/Welcome.css';

const Welcome = () => {
    return(
        <Container>
            <Row xs={1} md={1} lg={3}>
            <Jumbotron>
                <h1>Images Gallery</h1>
                <p>
                    This is a simple application that retrieves photo from unsplash.
                </p>
                <p>
                    <Button bsStyle="primary" href="https://www.unsplash.com" target="_blank">Learn more</Button>
                </p>
                </Jumbotron>

                <Jumbotron>
                <h1>Customer Centric</h1>
                <p>
                    This is a simple application that retrieves photo from unsplash.
                </p>
                <p>
                    <Button bsStyle="primary" href="https://www.unsplash.com" target="_blank">Learn more</Button>
                </p>
                </Jumbotron>

                <Jumbotron>
                <h1>Learn the Code!!</h1>
                <p>
                    This is a simple application that retrieves photo from unsplash.
                </p>
                <p>
                    <Button bsStyle="primary" href="https://www.unsplash.com" target="_blank">Learn more</Button>
                </p>
                </Jumbotron>
            </Row>
</Container>

    );
};

export default Welcome;