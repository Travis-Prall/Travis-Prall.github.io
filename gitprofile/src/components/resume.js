import React, { Component, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion } from "react-bootstrap";

export class Resume extends Component {
  render() {
    if (this.props.resumeData.resume) {
      var education = this.props.resumeData.resume.education.map(function (
        education
      ) {
        return (
          <Accordion.Item
            key={education.school}
            eventKey={education.school}
            className="my-3">
            <ContextAwareToggle eventKey={education.school}>
              <Stack>
                <h2>
                  <i className="fas fa-graduation-cap"></i> {education.school}
                </h2>
                <h4>
                  <em>{education.degree} </em>
                  <span>&bull;</span>
                  {education.concentration}
                  <span>&bull;</span>
                  Graduated {education.graduated.slice(0, 4)}
                </h4>
              </Stack>
            </ContextAwareToggle>
            <Accordion.Body>{education.description}</Accordion.Body>
          </Accordion.Item>
        );
      });
      var work = this.props.resumeData.resume.work.map(function (work) {
        return (
          <Accordion.Item
            key={work.company}
            eventKey={work.company}
            className="my-3">
            <ContextAwareToggle eventKey={work.company}>
              <Stack>
                <h2>{work.company}</h2>
                <h3>{work.title}</h3>
              </Stack>
            </ContextAwareToggle>
            <Accordion.Body>
              <h4>
                From {work.startdate} To {work.enddate}
              </h4>
              <p>{work.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        );
      });
      var craft = this.props.resumeData.resume.craft.map(function (craft) {
        return (
          <Accordion.Item
            key={craft.name}
            eventKey={craft.name}
            className="my-3">
            <ContextAwareToggle eventKey={craft.name}>
              <h2>{craft.name}</h2>
            </ContextAwareToggle>
            <Accordion.Body>
              <SkillBars skillset={craft.skills} />
            </Accordion.Body>
          </Accordion.Item>
        );
      });
    }
    if (this.props.resumeData.resume) {
      return (
        <Container fluid as="section" id="resume">
          <Row className="my-4 justify-content-center" id="education">
            <Col lg={3} className="p-3">
              <h1>
                <span>Education</span>
              </h1>
            </Col>
            <Col lg={9}>
              <Accordion flush>{education}</Accordion>
            </Col>
          </Row>

          <Row className="my-4 justify-content-center" id="work">
            <Col lg={3} className="p-3">
              <h1>
                <span>Work</span>
              </h1>
            </Col>

            <Col lg={9}>
              <Accordion flush>{work}</Accordion>
            </Col>
          </Row>

          <Row className="my-4 justify-content-center" id="craft">
            <Col lg={3} className="p-3">
              <h1>
                <span>Skills</span>
              </h1>
            </Col>

            <Col lg={9}>
              <Accordion flush>{craft}</Accordion>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <></>;
    }
  }
}

function SkillBars({ skillset }) {
  const SkillArray = skillset.map((skill) => (
    <ul key={skill.name}>
      <h3>{skill.name}</h3>
      <Container fluid className="barskill">
        <ProgressBar skill={skill}></ProgressBar>
      </Container>
    </ul>
  ));
  return <Container>{SkillArray}</Container>;
}

function ProgressBar({ skill }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(skill.progress);
  }, [skill]);

  return (
    <Row
      className="skills"
      style={{
        width: value + "%",
        backgroundColor: skill.color,
        transition: "all 5s ease-in-out",
      }}>
      <span className="slabel">{skill.progress}%</span>
    </Row>
  );
}

function ContextAwareToggle({ children, eventKey, callback }) {
  // const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  // const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Accordion.Header onClick={decoratedOnClick} className="info">
      {children}
    </Accordion.Header>
  );
}
