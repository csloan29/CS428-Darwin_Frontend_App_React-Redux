const authToken = 'AUTHORIZATION_TOKEN';

export function isLoggedIn() {
  if(window.localStorage.getItem(authToken)) {
    return true;
  }
  return false;
}

export function getToken() {
  return window.localStorage.getItem(authToken);
}

export function saveToken(token) {
  window.localStorage.setItem(authToken, token);
}

export function signOut() {
  window.localStorage.removeItem(authToken);
}
