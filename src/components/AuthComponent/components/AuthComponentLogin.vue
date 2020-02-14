<template>
  <div class="auth-component-login">
    <form @submit.prevent="onSubmit">
      <b-field label="Email">
        <b-input
          v-model="login"
          :class="{ 'is-error': login === '' }"
          maxlength="30"
        ></b-input>
      </b-field>

      <b-field label="Пароль">
        <b-input
          v-model="password"
          :class="{ 'is-error': password === '' }"
          type="password"
        ></b-input>
      </b-field>
      <button
        class="auth-component-login__button button is-success"
        type="submit"
      >
        Вход
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AuthComponentLogin",
  data() {
    return {
      login: "",
      password: "",
      valid: false,
      user1: {},
      user2: {}
    };
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
  methods: {
    onSubmit() {
      if (this.login !== "" || this.password !== "") {
        this.user1 = this.$store.state.user.users[0];
        this.user2 = this.$store.state.user.users[1];
        if (
          this.user1.login == this.login &&
          this.user1.password == this.password
        ) {
          this.valid = true;
          this.$store.dispatch("user/login", this.user1).then(() => {
            this.$router.push({ name: "Main" });
          });
        } else if (
          this.user2.login == this.login &&
          this.user2.password == this.password
        ) {
          this.valid = true;
          this.$store.dispatch("user/login", this.user2).then(() => {
            this.$router.push({ name: "Main" });
          });
        } else {
          this.valid = false;
        }
      }
    }
  }
};
</script>

<style>
.auth-component-login {
  min-width: 50%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  text-align: left;
}
.auth-component-login__button {
  width: 100%;
}
form {
  width: 100%;
}
form input:focus {
  border-color: #fff !important;
}
form .control.is-error input,
form .control.is-error textarea {
  border-color: #f00 !important;
}
</style>
