import React from "react";
import { Col, Row } from "react-bootstrap";

import ProfileCard from "./profile-card";

export default function ProfileList({ members, type }) {
    if (members.length > 0) {
        return (
            <Row className={`relative-section ${type}`}>
                <div className='relative-type'>{type}</div>

                {type !== "spouses" ? (
                    <RenderCards members={members} type={type} />
                ) : (
                    <Timeline members={members} type={type} />
                )}
            </Row>
        );
    } else {
      return (<></>)
    }
}

function RenderCards({ members, type }) {
    return (
        <>
            {members.map((member) => {
              if (member.type === type) {
                  return (
                        <Col sm={6} lg={6} md={6}>
                            <ProfileCard member={member.member}/>
                        </Col>
                    );
                } else {
                    return (
                        <></>   
                    )
                }
            })}
        </>
    );
}

function Timeline({ members, type }) {
    return (
      <Col sm={6} lg={6} md={6}>
            <ul class='list-updates'>
                {members.map((member) => {
                    if (member.type === type) {
                        return (
                            <li class='update'>
                                <ProfileCard member={member.member}/>
                            </li>
                        );
                    } else {
                        return (
                            <></>
                        )
                    }
                })}
            </ul>
        </Col>
    );
}
