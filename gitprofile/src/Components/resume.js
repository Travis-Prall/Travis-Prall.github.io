import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion } from 'react-bootstrap';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school} className='my-3'>
            <Accordion flush>
              <Accordion.Item eventKey={education.school}>
                <Accordion.Header className='info'>
                  <Row>
                    <Col md='auto'>
                      <i
                        className='fas fa-graduation-cap'
                        style={{ fontSize: '2em' }}></i>
                    </Col>
                    <Col md='auto'>
                      <Row>
                        <Col>
                          <h2>{education.school}</h2>
                        </Col>
                      </Row>
                      <Row>
                        <h4>
                          <Col>
                            <em>{education.degree} </em>
                            <span>&bull;</span>
                            {education.concentration}
                            <span>&bull;</span>
                            Graduated {education.graduated.slice(0, 4)}
                          </Col>
                        </h4>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>{education.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company} className='my-3'>
            <Accordion flush>
              <Accordion.Item eventKey={work.company}>
                <Accordion.Header className='info'>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <h2>{work.company}</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h3>{work.title}</h3>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <h4>
                    From {work.startdate} to {work.enddate}
                  </h4>
                  <p>{work.description}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      });
      var craft = this.props.data.craft.map(function (craft) {
        return (
          <div key={craft.name} className='my-3'>
            <Accordion flush >
              <Accordion.Item eventKey={craft.name}>
                <Accordion.Header className='info'>
                  <Row>
                    <Col>
                      <h2>{craft.name}</h2>
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <SkillBars skillset={craft.skills} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      });
    }
    if (this.props.data) {
      return (
        <section id='resume'>
          <Container fluid>
            <Row className='my-4 justify-content-center' id='education'>
              <Col lg={3} className='p-3'>
                <h1>
                  <span>Education</span>
                </h1>
              </Col>
              <Col lg={9}>{education}</Col>
            </Row>

            <Row className='my-4 justify-content-center' id='work'>
              <Col lg={3} className='p-3'>
                <h1>
                  <span>Work</span>
                </h1>
              </Col>

              <Col lg={9}>{work}</Col>
            </Row>

            <Row className='my-4 justify-content-center' id='craft'>
              <Col lg={3} className='p-3'>
                <h1>
                  <span>Skills</span>
                </h1>
              </Col>

              <Col lg={9}>{craft}</Col>
            </Row>
          </Container>
        </section>
      );
    } else {
      return <section id='resume'>''</section>;
    }
  }
}

function SkillBars(props) {
  const SkillArray = props.skillset.map((skill) => (
    <ul key={skill.name}>
      <h3>{skill.name}</h3>
      <Container fluid className='barskill'>
        <Row
          className='skills'
          style={{
            width: skill.progress + '%',
            backgroundColor: skill.color,
          }}>
          <span className='slabel'>{skill.progress}%</span>
        </Row>
      </Container>
    </ul>
  ));
  return <Container>{SkillArray}</Container>;
}

export default Resume;
