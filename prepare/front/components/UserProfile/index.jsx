import React from 'react';
import Link from 'next/link';
import gravatar from 'gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

const UserProfile = () => {
  return (
    <Container>
      <img src={gravatar.url('모모', { s: '28px', d: 'retro' })} alt="모모" />
      <span className="profile-nickname">모모</span>

      <Link href="/settings">
        <a className="profile-setting">
          <FontAwesomeIcon icon={faCog} size="2x" />
        </a>
      </Link>
      <LogoutButton>
        <Link>
          <a>
            <FontAwesomeIcon icon={faDoorOpen} size="2x" />
          </a>
        </Link>
      </LogoutButton>
    </Container>
  );
};

export default UserProfile;
