import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Gallery() {
  const [index, setIndex] = useState(0);
  let display = 'd-none d-md-block';
  let height = '600';
  let Ialignment = 'd-inline float-right';
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='gallery' className='my-4'>
      <Container fluid>
        <Row className='justify-content-md-center' id='artwork'>
          <Col lg={2}>
            <h1>
              <span>Photography</span>
            </h1>
          </Col>
          <Col lg={10}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Dan.jpg'
                  height={height}
                  alt='Dan'
                />
                <Carousel.Caption className={display}>
                  <h3>Dan</h3>
                  <p>Phototaken and edited by me</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Sin City.jpg'
                  height={height}
                  alt='Sin City 1'
                />
                <Carousel.Caption className={display}>
                  <h3>Sin City</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Sin City 2.jpg'
                  height={height}
                  alt='Sin City 2'
                />
                <Carousel.Caption className={display}>
                  <h3>Sin City</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Sin City Matrix Battle.jpg'
                  height={height}
                  alt='Sin City 3'
                />
                <Carousel.Caption className={display}>
                  <h3>Sin City</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Mirror.jpg'
                  height={height}
                  alt='Mirror'
                />
                <Carousel.Caption className={display}>
                  <h3>Mirror</h3>
                  <p>Photoshot with photography rendered through photoshop</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/See no Evil Hear no Evil Speak no Evil.jpg'
                  height={height}
                  alt='monkies'
                />
                <Carousel.Caption className={display}>
                  <h3>See no Evil Hear no Evil Speak no Evil</h3>
                  <p>Phototaken and edited by me</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className={Ialignment}
                  src='images/Brittney.jpg'
                  height={height}
                  alt='Jessica'
                />
                <Carousel.Caption className={display}>
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
