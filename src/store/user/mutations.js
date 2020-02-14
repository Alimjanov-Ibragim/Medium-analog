function SETUSER(state, user) {
  state.user = user;
  state.isAuthorized = true;
  localStorage.setItem("user-token", state.isAuthorized);
}

function LOGOUT(state) {
  state.isAuthorized = false;
  localStorage.removeItem("user-token");
}

function SETUSERS(state, data) {
  state.users = data || [];
}

export { SETUSERS, SETUSER, LOGOUT };
