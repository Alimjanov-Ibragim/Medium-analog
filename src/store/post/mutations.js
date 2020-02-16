function SETPOSTS(state, posts) {
  state.posts = posts || [];
}

function REMOVEPOST(state, post) {
  // state.posts = state.posts.filter(p => p.id !== post.id);
  if (state.posts.indexOf(post.id) !== -1) {
    state.posts.splice(state.posts.indexOf(post.id), 1);
  }
}

function EDITPOST(state, post) {
  state.posts.forEach((oldPost, key) => {
    if (post.id === oldPost.id) {
      state.posts[key] = post;
    }
  });
}

function ADDPOST(state, post) {
  state.posts.push(post);
}

function CHOOSEPOST(state, post) {
  state.post = post;
}

function INCREMENTCLAPS(state, post) {
  state.posts.forEach((oldPost, key) => {
    if (post.id === oldPost.id) {
      state.posts[key].claps += 1;
    }
  });
}

export { SETPOSTS, REMOVEPOST, ADDPOST, EDITPOST, CHOOSEPOST, INCREMENTCLAPS };
