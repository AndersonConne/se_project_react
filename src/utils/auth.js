import checkResponse from "./api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.jundy.org"
    : "http://localhost:3001";

function signupUser(userData) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      avatar: userData.avatar,
      email: userData.email,
      password: userData.password,
    }),
  }).then(checkResponse);
}

function loginUser(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
}

function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { signupUser, loginUser, checkToken };
