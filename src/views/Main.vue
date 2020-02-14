<template>
  <div class="main">
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent/MainComponent";
import { mapState } from "vuex";
export default {
  name: "Main",
  mounted() {
    if (!this.posts.length) {
      this.$store.dispatch("post/setPosts");
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  },
  methods: {
    removePost(id) {
      this.$store.dispatch("post/removePost", id);
    }
  },
  components: {
    MainComponent
  }
};
</script>

<style scoped></style>
