<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0%;
  font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB,
    Microsoft YaHei, sans-serif;
}
a {
  color: #2f93fd;
  text-decoration-line: none;
  font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB,
    Microsoft YaHei, sans-serif;
}
a:hover {
  color: #eb6985;
}
</style>
