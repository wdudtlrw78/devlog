import React from 'react';
import Link from 'next/link';
import gravatar from 'gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, LogoutButton, SettingButton } from './styles';

const UserProfile = () => {
  return (
    <Container>
      <img src={gravatar.url('모모', { s: '24px', d: 'retro' })} alt="모모" />
      <span className="profile-nickname">모모</span>

      <SettingButton>
        <Link href="/settings">
          <a>
            <div className="profile-setting">
              <FontAwesomeIcon icon={faCog} size="2x" />
            </div>
          </a>
        </Link>
      </SettingButton>
      <LogoutButton>
        <div className="profile-logout">
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </div>
      </LogoutButton>
    </Container>
  );
};

export default UserProfile;
