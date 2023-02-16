import { Link } from 'gatsby';
import React from 'react';

import { Col, Row } from 'react-bootstrap';

export default function DeveloperCredits({ siteInfo }) {
    return (
        <Row className="developer-footprints">
            <Col>
                <div className="copyright-text text-center">
                    Developed by <Link to={siteInfo.url} title={siteInfo.author}>{siteInfo.author}</Link>
                </div>
            </Col>
        </Row>        
    );
}
