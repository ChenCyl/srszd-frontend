<template>
  <header class="head-nav">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :router=true
        >
          <el-menu-item index="videos">&nbsp;视&nbsp;频&nbsp;</el-menu-item>
          <el-menu-item index="images">&nbsp;图&nbsp;片&nbsp;</el-menu-item>
          <el-menu-item index="timeline">&nbsp;Timeline&nbsp;</el-menu-item>
          <el-menu-item index="more">&nbsp;More&nbsp;</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      activeIndex: ""
    };
  },
  created() {
    // console.log(1)
    // console.log(this.$route.path)
    // 解决刷新页面或从 welcome 页跳转过来的时候当前 active 的标签不亮的问题
    if (this.$route.path == "/images") {
      this.activeIndex = "images";
    } else if (this.$route.path == "/videos") {
      this.activeIndex = "videos";
    } else if (this.$route.path == "/timeline") {
      this.activeIndex = "timeline";
    } else if (this.$route.path == "/more") {
      this.activeIndex = "more";
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
