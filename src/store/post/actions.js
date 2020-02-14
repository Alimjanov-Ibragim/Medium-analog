import { baseURL } from "@/store/urls";

function setPosts({ commit }) {
  fetch(`${baseURL}/posts`)
    .then(response => response.json())
    .then(json => {
      // this.posts = json
      commit("SETPOSTS", json);
    });
}

function editPost({ commit }, post) {
  fetch(`${baseURL}/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      commit("EDITPOST", json);
    });
}

function removePost({ commit }, post) {
  fetch(`${baseURL}/posts/${post.id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(json => {
      commit("REMOVEPOST", json);
    });
}

function addPost({ commit }, post) {
  fetch(`${baseURL}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      commit("ADDPOST", json);
    });
}

function choosePost({ commit }, post) {
  commit("CHOOSEPOST", post);
}

function incrementClaps({ commit }, post) {
  commit("INCREMENTCLAPS", post);
}

export { setPosts, removePost, addPost, editPost, choosePost, incrementClaps };
