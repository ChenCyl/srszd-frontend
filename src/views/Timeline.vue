<template>
  <timeline>
    <!-- 2019年 -->
    <timeline-title>
      <span style="font-size: 40px;">2019</span>
    </timeline-title>
    <br>
    <div v-for="(month, outerIndex) in months" :key="outerIndex">
      <!-- 用 v-show 才会显示出来 v-if 不行 -->
      <timeline-title v-show="flags[1][11 - outerIndex]">
        <span style="font-size: 20px">{{ month }}</span>
        <span style="color: white">{{lastRender}}</span>
      </timeline-title>
      <timeline-item :hollow="true" v-for="(item, index) in items[1][11 - outerIndex]" :key="index">
        <img :src="item.icon" class="icon-heart" slot="others">
        <p>{{ item.month }}-{{ item.day }}</p>
        <p class="title">
          <a :href="item.url">{{ item.title }}</a>
        </p>
        <p class="desc">{{ item.desc }}</p>
        <img :src="item.image" class="image">
      </timeline-item>
    </div>
    <!-- 2018年 -->
    <timeline-title>
      <span style="font-size: 40px;">2018</span>
    </timeline-title>
    <br>
    <div v-for="(month, outerIndex) in months" :key="month">
      <!-- 用 v-show 才会显示出来 v-if 不行 -->
      <timeline-title v-show="flags[0][11 - outerIndex]">
        <span style="font-size: 20px">{{ month }}</span>
        <span style="color: white">{{lastRender}}</span>
      </timeline-title>
      <timeline-item :hollow="true" v-for="(item, index) in items[0][11 - outerIndex]" :key="index">
        <img :src="item.icon" class="icon-heart" slot="others">
        <p>{{ item.month }}-{{ item.day }}</p>
        <p class="title">
          <a :href="item.url">{{ item.title }}</a>
        </p>
        <p class="desc">{{ item.desc }}</p>
        <img :src="item.image" class="image">
      </timeline-item>
    </div>
  </timeline>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

// 59aaff 很好看蓝色 reyi色
// eb6985 sury色

export default {
  data() {
    return {
      // flags[0] 18年
      // flags[1] 19年
      flags: [],
      items: [],
      lastRender: "",
      months: ["Dec.", "Nov.", "Oct.", "Sept.", "Aug.", "July", "June", "May", "Apr.", "Mar.", "Feb.", "Jan"]
    };
  },
  created() {
    this.init();
    this.getItems();
  },
  // 请求次数太多 出现问题：
  // 1. 最后必须有一个非 v-for 循环里的值被渲染进页面
  // 2. 加载条结束时数据还没出来
  // created() {
  //   // 初始化 flags items
  //   // this.flags = new Array();
  //   // this.items = new Array();
  //   for (let i = 0; i < 2; i++) {
  //     this.flags[i] = new Array();
  //     this.items[i] = new Array();
  //     let year = String(i + 2018);
  //     for (let j = 0; j < 12; j++) {
  //       let month = j + 1;
  //       if (month < 10) {
  //         month = "0" + String(month);
  //       } else {
  //         month = String(month);
  //       }
  //       this.$axios
  //         .get(`/api/items/${year}/${month}`)
  //         .then(res => {
  //           console.log(res)
  //           let result = res.data;
  //           // console.log(result);
  //           if (result) {
  //             result.sort(function(a, b) {
  //               return Number.parseInt(a.day) < Number.parseInt(b.day) ? 1 : -1;
  //             });
  //             // let x = String(year)
  //             this.items[i][j] = result;
  //             console.log(this.items[i][j]);
  //             if (this.items[i][j].length === 0) {
  //               this.flags[i][j] = false;
  //             } else {
  //               this.flags[i][j] = true;
  //             }
  //             console.log(i)
  //             console.log(j)
  //             console.log(this.flags[i][j]);
  //             // 最后必须有一个东西才会渲染页面 不知为何
  //             if (j == 11 && i == 1) {
  //               this.test = "heelllw"
  //             }
  //           }
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     }
  //   }
  // },
  mounted() {
    console.log(this.items);
    console.log(this.flags);
  },
  methods: {
    init() {
      for (let i = 0; i < 2; i++) {
        this.flags[i] = new Array();
        this.items[i] = new Array();
        for (let j = 0; j < 12; j++) {
          this.flags[i][j] = false;
          this.items[i][j] = [];
        }
      }
    },
    getItems() {
      for (let i = 0; i < 2; i++) {
        // let i = 1
        // this.flags[i] = new Array();
        // this.items[i] = new Array();
        let year = String(i + 2018);
        this.$axios
          .get(`/api/items/${year}`)
          .then(res => {
            console.log(res);
            let result = res.data;
            // console.log(result);
            if (result) {
              result.sort(function(a, b) {
                return Number.parseInt(a.day) < Number.parseInt(b.day) ? 1 : -1;
              });
              for (let item of result) {
                let j = Number.parseInt(item.month) - 1;
                console.log(j);
                this.items[i][j].push(item);
                this.flags[i][j] = true;
              }
            }
            if (i === 1) {
              this.lastRender = "S&R";
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
};
</script>

<style scoped>
.timeline {
  margin-left: 30%;
  margin-top: 50px;
  width: 40%;
}
.icon-heart {
  width: 20px;
}
.image {
  max-width: 100%;
}
</style>
