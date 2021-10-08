<template>
  <div
    :class="
      this.$store.state.isDarkMode ? 'text-light bg-dark' : 'text-dark bg-light'
    "
  >
    <div class="container mt-5">
      <h1>Welcome !</h1>
      <p>
        This is a fun project made with Vue 3 as a learning purpose (mainly on
        how do PWA works).
      </p>
      <p>
        Note that none of your information is collected, the website does not
        track or collect anything about you.
      </p>
      <p>
        This website can run offline, it only uses your local storage to store
        your data.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped></style>
