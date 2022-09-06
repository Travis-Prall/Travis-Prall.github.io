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
    <section id='gallery' className='my-4'>
      <Container fluid>
        <Row className='justify-content-md-center' id='artwork'>
          <Col lg={3}>
            <h1>
              <span>Photography</span>
            </h1>
          </Col>
          <Col lg={9}>
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
                  alt='Sin City 1'
                />
                <Carousel.Caption>
                  <h3>Sin City</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Sin City 2.jpg'
                  height='600'
                  alt='Sin City 2'
                />
                <Carousel.Caption>
                  <h3>Sin City</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Sin City Matrix Battle.jpg'
                  height='600'
                  alt='Sin City 3'
                />
                <Carousel.Caption>
                  <h3>Sin City</h3>
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
                  <h3>Mirror</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/See no Evil Hear no Evil Speak no Evil.jpg'
                  height='600'
                  alt='monkies'
                />
                <Carousel.Caption>
                  <h3>See no Evil Hear no Evil Speak no Evil</h3>
                  <p>Phototaken and edited by me</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/Brittney.jpg'
                  height='600'
                  alt='Jessica'
                />
                <Carousel.Caption>
                  <h3>Jessica</h3>
                  <p>Phototaken and edited by me</p>
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