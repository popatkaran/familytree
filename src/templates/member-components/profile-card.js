import React from 'react'
import { CardImg } from 'react-bootstrap'

import PlaceholderLogo from '../../../content/images/general/family-logo.png'

export default function ProfileCard({ member }) {
  return (
    <div class="card-big-shadow">
      <div class="card transition">
        <div class="content">
          <a href={`/member/${member.identifier}`}>
            <ProfilePicture member={member} />
            <Name member={member} />
          </a>
        </div>
      </div>
    </div>
  )
}

function Name({ member }) {
  return (
    <>
      {member.name != null ? (
        <h5 className="profile-name">{member.name}</h5>
      ) : (
        ''
      )}
    </>
  )
}

function ProfilePicture({ member }) {
  console.log(member)
  return (
    <>
      {member.profilePicture != null ? (
        <CardImg
          className="profile-picture"
          src={member.profilePicture.publicURL}
        />
      ) : (
        <CardImg
          className="profile-picture img-thumbnail"
          src={PlaceholderLogo}
        />
      )}
    </>
  )
}
