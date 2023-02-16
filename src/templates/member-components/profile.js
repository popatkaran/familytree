import React from "react";
import { Col, Row } from "react-bootstrap";
import ReadMoreReact from 'read-more-react';

export default function MemberProfile({ member, placeholderLogo }) {
    return (
        <Row className="member-info">
            <Col>
                <Name member={member} />
                <Timeline member={member}/>
                <Intro member={member}/>
            </Col>
        </Row>
    );
}

function Name({ member }) {
    return (
        <>
            {member.name != null ? (
                <h2 className="member-name">{member.name}</h2>
            ) : (
                ""
            )}
        </>
    );
}

function Timeline({ member }) {
    const dod = (member.dod !== null) ? ` - ${member.dod}` : '';
    return (
        <>
            {member.dob != null ? (
                <h6 className="member-timeline">({member.pob}, {member.dob}{dod})</h6>
            ) : (
                ""
            )}
        </>
    );
}

function Intro({ member }) {
    return (
        <>
            {member.intro !== null ? (
                <Row className="member-detail">
                    <Col><span className="member-intro"><ReadMoreReact text={member.intro} /></span></Col>
                </Row>
            ) : (
                ""
            )}
        </>
    );
}