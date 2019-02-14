<template>
  <div class="welcome">
    <section id="welcome" :class="{ highzindex: !isActive, lowzindex: isActive }">
      <div id="left" v-bind:class="{ Of: isActive }" @click="open"></div>
      <span id="Of" v-bind:class="{ On: isActive }"></span>
      <div id="right" v-bind:class="{ Of: isActive }" @click="open"></div>
    </section>
    <div id="index">
      <Index></Index>
    </div>
  </div>
</template>

<script>
import Index from './Index.vue'
export default {
  name: "welcome", 
  data() {
    return {
      isActive: false,

    }
  },
  methods: {
    open() {
      this.isActive = true;
    }
  },
  components: {
    Index,
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  transition: all 1s;
}

#welcome {
  color: rgb(255, 255, 255);
  text-shadow: 0 1px 3px red, -5px 0 8px rgb(44, 44, 44);
  display: flex;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  position: fixed;
  width: 100%;
}
.lowzindex {
  z-index: 0;
}
.highzindex{
  z-index: 6;
}
#welcome div:hover {
  text-shadow: 0 0 2px red, 0 0 0 rgb(44, 44, 44);
}
#welcome div {
  align-items: center;
  /* background:#333; */
  /* box-shadow: 0 0 100px black; */
  cursor: pointer;
  display: flex;
  font-size: 3em;
  font-weight: bold;
  width: 50%;
}
#left {
  justify-content: flex-end;
  background-image: url("../assets/reyi.png");
  /* background: rgb(61, 35, 35); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#right {
  justify-content: flex-start !important;
  background-image: url("../assets/sury.png");
  /* background: rgb(230, 148, 148); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.Of {
  justify-content: flex-end;
  width: 0 !important;
  visibility: hidden;
}
#Of {
  width: 0;
}
.On {
  width: 100% !important;
}
</style>

