<template>
  <!-- nav bar -->
  <nav
    class="navbar navbar-expand-lg"
    :class="
      this.$store.state.isDarkMode
        ? 'navbar-dark bg-nav-dark'
        : 'navbar-light bg-nav-light'
    "
  >
    <a class="navbar-brand ms-3" href="#">Todo</a>
    <button
      class="navbar-toggler me-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/"
            :class="{ active: $route.name === 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/about"
            :class="{ active: $route.name === 'About' }"
            >About</router-link
          >
        </li>
      </ul>
      <div
        class="nav-item btn me-3"
        @click="swapTheme"
        :class="
          this.$store.state.isDarkMode
            ? 'btn-outline-light'
            : 'btn-outline-dark'
        "
      >
        <i class="bi bi-moon-stars" v-if="!this.$store.state.isDarkMode"></i>
        <i class="bi bi-brightness-high" v-else></i>
      </div>
    </div>
  </nav>
  <!-- body equivalent -->
  <div>
    <router-view />
  </div>
  <!-- To the top button-->
  <button
    onclick="window.scroll({top: 0,left: 0,behavior: 'smooth'})"
    id="back-to-top"
    class="btn back-to-top"
    :class="this.$store.state.isDarkMode ? 'btn-light' : 'btn-dark'"
  >
    <i class="bi bi-chevron-up"></i>
  </button>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    //body color
    let body = document.querySelector("body");
    this.$store.state.isDarkMode
      ? body.classList.add("text-light", "bg-dark")
      : body.classList.add("text-dark", "bg-light");
  },
  methods: {
    onScroll() {
      let toTheTop = document.getElementById("back-to-top");
      if (window.top.scrollY > 50) {
        toTheTop.style.display = "inline";
      } else {
        toTheTop.style.display = "none";
      }
    },
    swapTheme() {
      this.$store.commit("swapDarkTheme");
      //body color
      let body = document.querySelector("body");
      if (this.$store.state.isDarkMode) {
        body.classList.add("text-light", "bg-dark");
        body.classList.remove("text-dark", "bg-light");
      } else {
        body.classList.add("text-dark", "bg-light");
        body.classList.remove("text-light", "bg-dark");
      }
    },
  },
};
</script>
<style>
.bg-nav-dark {
  background-color: #171717;
}
.bg-nav-light {
  background-color: lightcyan;
}
.back-to-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: none;
}
</style>
