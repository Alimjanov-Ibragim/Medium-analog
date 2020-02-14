<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <form @submit.prevent="saveModal = true">
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
            <button
              class="button is-success submit"
              @click.prevent="saveModal = true"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal" :class="{ 'is-active': saveModal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            @click="saveModal = false"
          ></button>
        </header>
        <footer class="modal-card-foot">
          <button class="button is-success" @click.prevent="onSubmit">
            Save changes
          </button>
          <button class="button" @click="saveModal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainComponentEdit",
  data() {
    return {
      saveModal: false
    };
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      post: state => state.post.post
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("post/editPost", this.post).then(() => {
        this.$router.push({ name: "Main" });
      });
    }
  },
  mounted() {
    if (location.href.indexOf("?") > -1) {
      let postId = location.href.split("?")[1].split("=")[1];
      this.posts.forEach(element => {
        if (element.id === parseInt(postId)) {
          this.$store.dispatch("post/choosePost", element);
        }
      });
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
.modal-card-head,
.modal-card-foot {
  justify-content: center;
}
</style>
