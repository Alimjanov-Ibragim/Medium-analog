<template>
  <div class="auth">
    <AuthComponent />
  </div>
</template>

<script>
import AuthComponent from "@/components/AuthComponent/AuthComponent";
import { mapState } from "vuex";

export default {
  name: "Auth",
  mounted() {
    if (!this.users.length) {
      this.$store.dispatch("user/users");
    }
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
  components: {
    AuthComponent
  }
};
</script>

<style scoped>
.auth {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
