import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import KurumsalBukyTalk from "../../Assets/Projects/kurumsalBukyTalkHome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A portfolio website where I present my projects and publish my future projects. I created this project using ReactJS. The purpose of this project was created for you to know who is Necati Boğa and to communicate with me."
              link="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KurumsalBukyTalk}
              isBlog={false}
              title="BukyTalk Kurumsal"
              description="Bukytalk Information Technologies Training and Consultancy Inc. A website I made for corporate companies working with In this project, I used ReactJS on the Front-End side. On the backend, I used PHP. It has a login page that works fine using an API (token the password) and tables that work fine. I used the react-bootstrap-table2 library in the table section. Other things I use; Axios, Bootstrap, CSS, etc."
              link="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
