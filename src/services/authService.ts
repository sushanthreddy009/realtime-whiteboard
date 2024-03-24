import keycloak from '../utils/keycloak-config';

export const initKeycloak = () => {
  keycloak.init({
    onLoad: 'login-required'
  })
  .then((authenticated) => {
    console.log(authenticated ? 'Authenticated' : 'Not authenticated');
  })
  .catch(console.error);
};

export const logout = () => {
  keycloak.logout();
};

export const getToken = () => {
  return keycloak.token;
};
