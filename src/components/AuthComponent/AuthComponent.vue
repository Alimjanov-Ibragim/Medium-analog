<template>
  <div class="auth-component">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthComponent"
};
</script>

<style scoped>
.auth-component {
  min-width: 50%;
}
@media (max-width: 500px) {
  .auth-component {
    min-width: 80% !important;
  }
}
</style>
