function SETPOSTS(state, posts) {
  state.posts = posts || [];
}

function REMOVEPOST(state, post) {
  state.posts = state.posts.filter(p => p.id !== post.id);
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
