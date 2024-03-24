import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth', 
  realm: 'master',  // This is the default realm in Keycloak
  clientId: 'realtime-whiteboard',  // You need to create a client in Keycloak and use its ID here
});

export default keycloak;

