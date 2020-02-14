<template>
  <div id="app">
    <b-navbar fixed-top class="is-success">
      <template slot="brand">
        <a class="navbar-item" href="https://medium.com/">
          <svg width="35" height="35" viewBox="5 5 35 35" class="q">
            <path
              d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z"
            ></path>
          </svg>
        </a>
      </template>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <template slot="start">
        <div
          id="navbarBasicExample"
          class="navbar-menu"
          v-if="$route.name !== 'Auth' && $route.name !== 'AuthComponentLogin'"
        >
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link
              v-if="$store.state.user.user.role != 'reader'"
              class="navbar-item"
              :to="{ name: 'MainComponentAddPost' }"
              >Создать пост</router-link
            >
          </div>
        </div>
      </template>
      <template slot="end">
        <div
          class="navbar-end"
          v-if="['AuthComponentLogin'].indexOf($route.name) == -1"
        >
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-danger" @click="logOut">
                Выйти
              </a>
            </div>
          </div>
        </div>
      </template>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
  methods: {
    logOut() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push({ name: "AuthComponentLogin" });
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #d8d3d3;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-menu.is-active .buttons .button {
  width: 100%;
}
</style>
