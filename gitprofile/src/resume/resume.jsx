import { useState, useEffect, useContext, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import { Accordion } from "react-bootstrap";
import { db } from "../firestore";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { logEvent as logAnalyticsEvent } from "../utils/analytics";
import { useSectionTracking } from "../hooks/useSectionTracking";

export const Resume = ({ pageMode }) => {
  const [blocks, setBlocks] = useState([]);
  const resumeRef = useSectionTracking("Resume");

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const blocksCollectionRef = collection(db, pageMode);
        const data = await getDocs(blocksCollectionRef);
        setBlocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching resume blocks:", error);
      }
    };
    fetchBlocks();
  }, [pageMode]);

  const { educationBlock, workBlock, skillBlock } = useMemo(() => {
    return {
      educationBlock: blocks.find((obj) => obj.id === "education") || [],
      workBlock: blocks.find((obj) => obj.id === "work") || [],
      skillBlock: blocks.find((obj) => obj.id === "skills") || [],
    };
  }, [blocks]);

  if (blocks.length > 0) {
    return (
      <Container fluid as="section" id="resume" ref={resumeRef}>
        <BlockArray array={educationBlock} title="Education" />
        <BlockArray array={workBlock} title="Work" />
        <SkillArray array={skillBlock} title="Skills" />
      </Container>
    );
  }
  return null;
};

const BlockArray = (props) => {
  if (props.array.data) {
    const arrayblock = props.array.data.map((chunk) => (
      <Accordion.Item eventKey={chunk.title} key={chunk.title} className="my-3">
        <ContextAwareToggle eventKey={chunk.title}>
          <Stack>
            <h2>{chunk.title}</h2>

            <h3>
              {PreTitle(chunk)}
              {chunk.subtitle}
            </h3>
          </Stack>
        </ContextAwareToggle>
        <Accordion.Body>{chunk.description}</Accordion.Body>
      </Accordion.Item>
    ));
    return <Section title={props.title}>{arrayblock}</Section>;
  } else {
    return null;
  }
};

const SkillArray = (props) => {
  if (props.array.data) {
    const arrayblock = props.array.data.map((skill) => (
      <Accordion.Item eventKey={skill.title} key={skill.title} className="my-3">
        <ContextAwareToggle eventKey={skill.title}>
          <h2>{skill.title}</h2>
        </ContextAwareToggle>
        <Accordion.Body>
          <SkillBars skillset={skill.skillarray} eventKey={skill.title} />
        </Accordion.Body>
      </Accordion.Item>
    ));
    return <Section title={props.title}>{arrayblock}</Section>;
  } else {
    return null;
  }
};

const Section = (props) => {
  return (
    <Row className="my-4 justify-content-center" id="craft">
      <Col lg={3} className="p-3">
        <h1>
          <span>{props.title}</span>
        </h1>
      </Col>

      <Col lg={9}>
        <Accordion flush>{props.children}</Accordion>
      </Col>
    </Row>
  );
};

const SkillBars = ({ skillset, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurrentEventKey = activeEventKey === eventKey;
  const SkillArray = skillset
    .sort((a, b) => b.progress - a.progress)
    .map((skill) => (
      <ul key={skill.name}>
        <h3>{skill.name}</h3>
        <Container fluid className="barskill">
          <ProgressBar skill={skill} active={isCurrentEventKey}></ProgressBar>
        </Container>
      </ul>
    ));
  return <>{SkillArray}</>;
};

const ProgressBar = ({ skill, active }) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (active) {
      setProgressValue(skill.progress);
    } else {
      setProgressValue(0);
    }
  }, [active, skill.progress]);

  return (
    <Row
      className="skills"
      style={{
        width: progressValue + "%",
        background: "linear-gradient(to right, #B8860B, #FFD700)",
        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
        transition: "width 3s ease-in-out 1s"
      }}
    >
      <span className="slabel" style={{ color: "#000", fontWeight: "bold" }}>{skill.progress}%</span>
    </Row>
  );
};

const PreTitle = (chunk) => {
  if (chunk.pretitle) {
    return (
      <>
        <i>{chunk.pretitle && chunk.pretitle}</i>
        <span> &bull; </span>
      </>
    );
  }
  return null;
};

function ContextAwareToggle({ children, eventKey, callback }) {
  const analytics = getAnalytics();
  const decoratedOnClick = useAccordionButton(eventKey, (event) => {
    logEvent(analytics, "accordion_toggle", { id: eventKey });
    logAnalyticsEvent("Content", "expand", eventKey);
    if (callback) callback(eventKey);
  });

  return (
    <Accordion.Header onClick={decoratedOnClick} className="info">
      {children}
    </Accordion.Header>
  );
}
