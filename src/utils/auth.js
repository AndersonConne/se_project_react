const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

async function request(url, options) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

function signupUser(userData) {
  return request(`${baseUrl}/signup`, {
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
  });
}

function loginUser({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export { signupUser, loginUser, checkToken };
