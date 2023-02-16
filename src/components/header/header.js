import { Link } from 'gatsby';
import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';

import Logo from "../../../content/images/general/family-logo-bw.png";

export default function Header({ siteInfo }) {
    return (
        <Container className="header">
            <Row>
                <Col>
                    <Link to="/">
                        <Image src={Logo}
                            className="center-block center img-responsive" 
                            title={siteInfo.title} 
                            alt={siteInfo.title}
                            width={120}
                            height={120}
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}