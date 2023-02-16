import React from "react";
import { Col, Row } from "react-bootstrap";

import ProfileCard from "../../templates/member-components/profile-card";

export default function SearchResults({ members }) {
  return (
    <Row data-masonry='{"percentPosition": true }'>
      {members.map((member) => (
        <Col
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
        xxl={2}
        id={member.identifier}
      >
          <ProfileCard member={member}/>
        </Col>
      ))}
    </Row>
  );
}
