import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import variables from "../../colors.module.scss";

export default function Header() {
  const tabs: string[] = ["main", "login", "cases"];

  return (
    <Nav
      style={{
        background: variables.headerBg,
      }}
      className="header shadow">
      {tabs.map((tab) => (
        <Nav.Link>
          <Link to={`/${tab}`}>{tab}</Link>
        </Nav.Link>
      ))}
    </Nav>
  );
}
