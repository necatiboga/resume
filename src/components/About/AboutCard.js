import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Necati Boğa </span>I am currently a
            senior <span className="purple"> at Akdeniz University</span>
            <br />
            studying Computer Engineer.
            <br />
            <br />I have experience with{" "}
            <span className="purple"> Javascript</span> and{" "}
            <span className="purple"> Java</span>
            <br />
            Also, I am currently learning to{" "}
            <span className="purple"> ReactJS</span> for web development.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
