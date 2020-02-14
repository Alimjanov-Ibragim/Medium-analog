<template>
  <section class="section">
    <form @submit.prevent="onSubmit">
      <b-field label="Заголовок">
        <b-input
          v-model="post.title"
          :class="{ 'is-error': post.title === '' }"
        ></b-input>
      </b-field>
      <b-field label="Текст">
        <b-input
          v-model="post.description"
          :class="{ 'is-error': post.description === '' }"
          maxlength="200"
          type="textarea"
        ></b-input>
      </b-field>
      <button class="button is-success submit" type="submit">
        Создать
      </button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainComponentAddPost",
  data() {
    return {
      post: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  },
  methods: {
    onSubmit() {
      if (this.post.title.trim() || this.post.description.trim()) {
        const newPost = {
          id: this.posts.length + 1,
          title: this.post.title,
          description: this.post.description,
          claps: 0,
          createdAt: "2019-09-29T00:00:00.000Z", //.toISOString()
          updateAt: "2019-09-29T00:00:00.000Z",
          userId: 1
        };
        this.post = {};
        this.$store.dispatch("post/addPost", newPost).then(() => {
          this.$router.push({ name: "Main" });
        });
      }
    }
  }
};
</script>

<style>
.label {
  text-align: left;
}
.button.submit {
  width: 100%;
}
</style>
