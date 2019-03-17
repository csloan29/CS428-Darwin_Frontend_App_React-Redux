const authToken = 'AUTHORIZATION_TOKEN';
const userStorage = 'USER_INFORMATION';
//const boardStorage = 'BOARD_INFORMATION';

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

export function saveUser(user) {
  window.localStorage.setItem(userStorage, JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(window.localStorage.getItem(userStorage));
}

export function clearLocalSignIn() {
  window.localStorage.removeItem(authToken);
}
