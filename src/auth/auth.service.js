export const AuthService = {
  authenticate,
  register,
  logout,
  isAuthenticated
};

/***** PUBLIC *****/

function authenticate({ email, password }) {
  return fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(storeAuth);
}

function register({ fullName, email, password }) {
  return fetch('/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
  })
  .then(res => res.json())
  .then(storeAuth);
}

function logout() {
  clearAuth();
}

function isAuthenticated() {
  return localStorage.getItem('token');
}

/***** PRIVATE *****/

function storeAuth(data) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data;
}

function clearAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
