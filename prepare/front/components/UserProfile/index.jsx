import React, { useCallback } from 'react';
import Link from 'next/link';
import gravatar from 'gravatar';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, LogoutButton, SettingButton } from './styles';
import { logoutAction } from '../../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Container>
      <img src={gravatar.url('모모', { s: '24px', d: 'retro' })} alt="모모" />
      <span className="profile-nickname">모모</span>

      <SettingButton title="설정">
        <Link href="/settings">
          <a>
            <div className="profile-setting">
              <FontAwesomeIcon icon={faCog} size="2x" />
            </div>
          </a>
        </Link>
      </SettingButton>
      <LogoutButton onClick={onLogout} title="로그아웃">
        <div className="profile-logout">
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </div>
      </LogoutButton>
    </Container>
  );
};

export default UserProfile;
