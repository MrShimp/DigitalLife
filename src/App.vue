<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="wrapper">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content ep-bg-purple">
              <RouterLink to="/">Home</RouterLink>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ep-bg-purple">
              <RouterLink to="/about">About</RouterLink>
            </div>
          </el-col>
          <el-col :span="8"
            ><div class="grid-content ep-bg-purple">
              <RouterLink to="/map">MyFootprint</RouterLink>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content ep-bg-purple">
              <RouterLink to="/selfie">Selfie</RouterLink>
            </div></el-col
          >
        </el-row>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
