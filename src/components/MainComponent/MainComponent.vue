<template>
  <div class="main-component">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponent",
  methods: {},
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  }
};
</script>

<style scoped>
.main-component > section {
  padding-top: 80px;
}
</style>
