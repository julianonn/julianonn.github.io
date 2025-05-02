<!-- filepath: /Users/julianonn/_myprojects/julianonn.github.io/src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><a href="index.html">about me</a></li>
      <li><a href="#">cv</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  /* background-color: white;*/
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 0px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: black;
}
.nav-links a:hover {
  color: var(--accent_color);
}
</style>