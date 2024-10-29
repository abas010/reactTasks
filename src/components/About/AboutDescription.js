import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AboutDescription.css'

export default function AboutDescription() {
  return (
    <Container>
      <h2 className="white">Laptop</h2>
      <Row>
        <Col>
          <p className="white">
            A laptop computer or notebook computer, also known as a laptop or
            notebook, is a small, portable personal computer (PC). Laptops
            typically have a clamshell form factor with a flat-panel screen on
            the inside of the upper lid and an alphanumeric keyboard and
            pointing device on the inside of the lower lid.[1][2] Most of the
            computer's internal hardware is fitted inside the lower lid
            enclosure under the keyboard, although many modern laptops have a
            built-in webcam at the top of the screen, and some even feature a
            touchscreen display. In most cases, unlike tablet computers which
            run on mobile operating systems, laptops tend to run on desktop
            operating systems, which were originally developed for desktop
            computers. Laptops can run on both AC power and rechargable battery
            packs and can be folded shut for convenient storage and
            transportation, making them suitable for mobile use.[3] Laptops are
            used in a variety of settings, such as at work (especially on
            business trips), in education, for playing games, web browsing, for
            personal multimedia, and for general home computer use.
          </p>
        </Col>
        <Col className="felx-centered">
          <img src="/img/Laptop Website Presentation.jpg" alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="white">
            The word laptop, modeled after the term desktop (as in desktop
            computer), refers to the fact that the computer can be practically
            placed on the user's lap; while the word notebook refers to most
            laptops sharing a form factor with paper notebooks. As of 2024, in
            American English, the terms laptop and notebook are used
            interchangeably;[4] in other dialects of English, one or the other
            may be preferred.[5] The term notebook originally referred to a type
            of portable computer that was smaller and lighter than mainstream
            laptops of the time, but has since come to mean the same thing and
            no longer refers to any specific size. Laptops combine many of the
            input/output components and capabilities of a desktop computer into
            a single unit, including a display screen (usually 11–17 in or
            280–430 mm in diagonal size), small speakers, a keyboard, and a
            pointing device (namely compact ones such as touchpads or pointing
            sticks). Most modern laptops include a built-in webcam and
            microphone, and many also have touchscreens. Hardware specifications
            may vary significantly between different types, models, and price
            points. Design elements, form factors, and construction can also
            vary significantly between models depending on the intended use.
            Examples of specialized models of laptops include 2-in-1 laptops,
            with keyboards that either be detached or pivoted out of view from
            the display (often marketed having a "laptop mode"); rugged laptops,
            for use in construction or military applications; and
            low-production-cost laptops such as those from the One Laptop per
            Child (OLPC) organization, which incorporate features like solar
            charging and semi-flexible components not found on most laptop
            computers. Portable computers, which later developed into modern
            laptops, were originally considered to be a small niche market,
            mostly for specialized field applications, such as in the military,
            for accountants, or traveling sales representatives. As portable
            computers evolved into modern laptops, they became widely used for a
            variety of purposes.[6]
          </p>
        </Col>
      </Row>
    </Container>
  );
}
