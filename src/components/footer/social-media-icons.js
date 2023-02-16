import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Col, Image, Row } from 'react-bootstrap';

const SocialMediaIcons = () => (
    <Row>
        <Col>
            <StaticQuery 
                    query = 
                    {
                        graphql`
                            {
                                allSocialMediaYaml {
                                nodes {
                                    platform {
                                        name
                                        page_url
                                        profile_url
                                        icon {
                                            publicURL
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render = {
                        data => (
                            <div className="social-media-links">
                                <ul>
                                    {
                                        data.allSocialMediaYaml.nodes.map((socialMedia) => {
                                            return (
                                                <li>
                                                    <a href={socialMedia.platform.profile_url} 
                                                        title={socialMedia.platform.name}>
                                                        <Image src={socialMedia.platform.icon.publicURL}  
                                                            width={32} 
                                                            height={32} 
                                                            alt={socialMedia.platform.name} 
                                                            title={socialMedia.platform.name} />
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
            ></StaticQuery>
        </Col>
    </Row>
);

export default SocialMediaIcons