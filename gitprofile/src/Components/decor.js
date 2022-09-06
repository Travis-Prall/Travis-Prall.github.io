import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Decor() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='decor' className='my-4'>
      <Container fluid>
        <Row className='justify-content-md-center' id='artwork'>
          <Col lg={3}>
            <h1>
              <span>Home Decor</span>
            </h1>
          </Col>
          <Col lg={9}>
            <Carousel activeIndex={index} onSelect={handleSelect}>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/home1.jpg'
                  height='600'
                  alt='Entryway'
                />
                <Carousel.Caption>
                  <h3>Entryway</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/home2.jpg'
                  height='600'
                  alt='Living Room'
                />
                <Carousel.Caption>
                  <h3>Living Room</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/home3.jpg'
                  height='600'
                  alt='Living Room 2'
                />
                <Carousel.Caption>
                  <h3>Living Room</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/home4.jpg'
                  height='600'
                  alt='Stairwell'
                />
                <Carousel.Caption>
                  <h3>Stairs</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block float-right'
                  src='images/home5.jpg'
                  height='600'
                  alt='Egyptian Wall Mural'
                />
                <Carousel.Caption>
                  <h3>Egyptian Wall Mural</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Decor;