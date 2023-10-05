import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Koostja Degtjarenko </span>
            from <span className="purple"> Brahin, Belarus.</span>
            <br />
            Currently, I am programming websites for foreign Internet users and companies. 
            <br />
            <br />
            I am clearly a newbie in this business and have a lot to learn. 
            <br/>
            In the future I want to master multifunctional programming languages such as C++, JavaScript, C# and many others.
             I hope for further cooperation.           </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kostja Degtjarenko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
