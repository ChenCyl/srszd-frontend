<template>
  <div class="home">
    <HeadNav></HeadNav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadNav from "../components/HeadNav";
export default {
  name: "home",
  components: {
    HeadNav,
  },
};
</script>

<style scoped>
.container{
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>

