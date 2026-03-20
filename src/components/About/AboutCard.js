import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Aswanth Murali</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            <br />I hold an Integrated MCA (IMCA) in{" "}
            <span className="purple">Computer Applications</span> from{" "}
            <span className="purple">SCMS School of Technology and Management</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography 📸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by determination to turn challenges into meaningful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Aswanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
