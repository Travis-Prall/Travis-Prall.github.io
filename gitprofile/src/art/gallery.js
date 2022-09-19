import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Gallery(props) {
  if (props.resumeData.gallery) {
    var chunk = props.resumeData.gallery.map(function (gallery) {
      return (
        <Container fluid key={gallery.section} id="art" className="my-4">
          <Row className="justify-content-md-center" id="artwork">
            <Col lg={2}>
              <h1>
                <span>{gallery.section}</span>
              </h1>
            </Col>

            <Col lg={10}>{Book(gallery.pictures)}</Col>
          </Row>
        </Container>
      );
    });
    return (
      <Container fluid as="section" id="gallery" className="my-4">
        {chunk}
      </Container>
    );
  } else {
    return (
      <Container fluid as="section" id="gallery" className="my-4"></Container>
    );
  }
}

function Book(props) {
  const display = "d-none d-md-block";
  const height = 600;
  const Ialignment = "d-inline float-right";

  var bookArray = props.map((picture) => (
    <Carousel.Item key={picture.name}>
      <Image
        className={Ialignment}
        src={picture.src}
        height={height}
        alt={picture.alt}
      />
      <Carousel.Caption className={display}>
        <h3>{picture.name}</h3>
        <p>{picture.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return <Carousel>{bookArray}</Carousel>;
}

export default Gallery;
