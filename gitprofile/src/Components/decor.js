import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Decor() {
  const [index, setIndex] = useState(0);
  let display = 'd-none d-md-block';
  let height = '600';
  let Ialignment = 'd-inline float-right';
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='decor' className='my-4'>
      <Container fluid>
        <Row className='justify-content-md-center' id='artwork'>
          <Col lg={2}>
            <h1>
              <span>Home Decor</span>
            </h1>
          </Col>
          <Col lg={10}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className={Ialignment}
                  src='images/home1.jpg'
                  height={height}
                  alt='Entryway'
                />
                <Carousel.Caption className={display}>
                  <h3>Entryway</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className={Ialignment}
                  src='images/home2.jpg'
                  height={height}
                  alt='Living Room'
                />
                <Carousel.Caption className={display}>
                  <h3>Living Room</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className={Ialignment}
                  src='images/home3.jpg'
                  height={height}
                  alt='Living Room 2'
                />
                <Carousel.Caption className={display}>
                  <h3>Living Room</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className={Ialignment}
                  src='images/home4.jpg'
                  height={height}
                  alt='Stairwell'
                />
                <Carousel.Caption className={display}>
                  <h3>Stairs</h3>
                  <p>Wall Painting done by myself</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className={Ialignment}
                  src='images/home5.jpg'
                  height={height}
                  alt='Egyptian Wall Mural'
                />
                <Carousel.Caption className={display}>
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
