import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown, Icon } from 'react-tube-kit';

const HeaderUserMenu = ({ user }) => {
  const history = useHistory();

  const goToUrl = url => {
    history.push(url);
  };

  return (
    <Dropdown
      buttonProps={{
        type: 'link',
        color: 'secondary-alt',
        icon: 'user',
        iconColor: user ? 'primary' : null
      }}
      text={user ? user.firstName : 'My account'}
    >
      <ul className="width-200">
        {!user ? (
          <>
            <li className="px-6 py-2">
              <Button icon="login" size="sm" block onClick={() => goToUrl('/login')}>
                Log In
              </Button>
            </li>
            <li className="px-3 py-1">
              Are you new?{' '}
              <Button
                type="link"
                className="ml-1"
                color="secondary-alt"
                onClick={() => goToUrl('/register')}
              >
                Register
              </Button>
            </li>
          </>
        ) : null}
        {user && user.authLevel === 'admin' ? (
          <li className="dropdown-menu-element">
            <a
              className={`d-flex align-items-center h-100 px-3 py-1 font-weight-light ${
                !user ? 'disabled' : ''
              }`}
              onClick={() => goToUrl('/admin/towns')}
            >
              <Icon name="town" className="mr-2" size="sm" />
              Towns
            </a>
          </li>
        ) : null}
        <li className="dropdown-menu-element">
          <a
            className={`d-flex align-items-center h-100 px-3 py-1 font-weight-light ${
              !user ? 'disabled' : ''
            }`}
            onClick={() => goToUrl('/admin/drafts')}
          >
            <Icon name="town" className="mr-2" size="sm" />
            My drafts
          </a>
        </li>
        <li className="dropdown-menu-element">
          <a
            className={`d-flex align-items-center h-100 px-3 py-1 font-weight-light ${
              !user ? 'disabled' : ''
            }`}
            onClick={() => goToUrl('/admin/my-profile')}
          >
            <Icon name="settings" className="mr-2" size="sm" />
            My profile
          </a>
        </li>
        <li className="dropdown-menu-element">
          <a
            className={`d-flex align-items-center h-100 px-3 py-1 font-weight-light ${
              !user ? 'disabled' : ''
            }`}
            onClick={() => goToUrl('/login')}
          >
            <Icon name="logout" className="mr-2" size="sm" />
            Log out
          </a>
        </li>
      </ul>
    </Dropdown>
  );
};

HeaderUserMenu.defaultProps = {
  user: null
};

HeaderUserMenu.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string
  })
};

export default HeaderUserMenu;
