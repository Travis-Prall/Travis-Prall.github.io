import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='gallery'>
      <Container fluid>
        <Row className='justify-content-md-center' id='artwork'>
          <Col sm={2}>
            <h1>
              <span>ArtWork</span>
            </h1>
          </Col>
          <Col sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Dan.jpg'
                  height='600'
                  alt='Dan'
                />
                <Carousel.Caption>
                  <h3>Dan</h3>
                  <p>Phototaken and edited by me</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Sin City.jpg'
                  height='600'
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h3>Digital Artwork</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Mirror.jpg'
                  height='600'
                  alt='Mirror'
                />

                <Carousel.Caption>
                  <h3>Wall</h3>
                  <p>Home Decor in style of modern contemporary</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;