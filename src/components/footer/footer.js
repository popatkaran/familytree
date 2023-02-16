import React from 'react';

import {Container } from 'react-bootstrap';

import SocialMediaIcons from "../footer/social-media-icons";
import DeveloperCredits from "../footer/developer-credits";

export default function Footer({ siteInfo }) {
    return (
        <footer className="footer mt-auto" id="footer">
            <Container>
                <SocialMediaIcons />
                <DeveloperCredits siteInfo={siteInfo}/>
            </Container>
        </footer>
    );
}
