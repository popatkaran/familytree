import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import ProfileList from './member-components/profile-list'
import MemberProfile from './member-components/profile'
import { Col, Container, Image, Row } from 'react-bootstrap'

import PlaceholderCover from '../../content/images/general/family-logo.png'

const MemberesTemplate = ({ data }) => {
  const member = data.member
  const allMembers = data.allMembers
  const relationships = member.relationships
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="member-cover">
            <Image
              src={
                member.cover !== null
                  ? member.cover.publicURL
                  : PlaceholderCover
              }
              className="resize_fit_center"
              alt={member.name}
              title={member.name}
            />
            {/* <div className="member-cover-name">{member.name}</div> */}
          </Col>
          <Col sm={12} md={12} lg={6} className="member-details">
            <MemberProfile member={member} />
            {relationships.map((rel) => {
              return (
                <ProfileList
                  members={getRelatives(
                    relationships,
                    allMembers,
                    rel.relation,
                  )}
                  type={rel.relation}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($identifier: String) {
    member: membersYaml(identifier: { eq: $identifier }) {
      lname
      fname
      name
      identifier
      intro
      dob
      dod
      pob
      pol
      mobileNo
      relationships {
        relation
        members {
          member
          from
          to
        }
      }
      profilePicture {
        publicURL
      }
      cover {
        publicURL
      }
    }
    allMembers: allMembersYaml {
      nodes {
        name
        identifier
        profilePicture {
          publicURL
        }
      }
    }
  }
`

export default MemberesTemplate

function getRelatives(relationships, allMembers, type) {
  var memberIds = []
  relationships.map((rel) => {
    rel.members.map((member) => {
      memberIds[member.member] = {
        member: member.member,
        type: rel.relation,
      }
    })
  })
  var membersDetails = []

  allMembers.nodes.map((memberDetail) => {
    if (
      memberIds[memberDetail.identifier] &&
      memberIds[memberDetail.identifier].type === type
    ) {
      membersDetails.push({ member: memberDetail, type: type })
    }
  })

  return membersDetails
}
