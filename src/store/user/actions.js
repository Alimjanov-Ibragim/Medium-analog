import { baseURL } from "@/store/urls";

/* eslint-disable */
function login({ commit }, user) {
  commit("SETUSER", user);
}

function logout({ commit }) {
  commit("LOGOUT");
}

function users({ commit }) {
  fetch(`${baseURL}/users`)
    .then(response => response.json())
    .then(json => {
      commit("SETUSERS", json);
    });
}

export { users, login, logout };
