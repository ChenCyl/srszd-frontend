<template>
  <div class="images">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="{span: 24}" :span="18">
        <el-tabs type="border-card" @tab-click="showImages">
          <el-tab-pane label="All">
            <div class="container">
              <el-row>
                <el-col :xs="{span: 12}" :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <div class="image-frame">
                      <a :href="videoInfo.url" target="_blank">
                        <progressive-background
                          :src="videoInfo.url"
                          :placeholder="placeholder"
                        />
                      </a>
                    </div>
                    <div class="cardInfo">
                      <el-button type="text" class="button">
                        <a :href="videoInfo.authorLink" target="_blank">@{{ videoInfo.author }}</a>
                      </el-button>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="page">
              <div class="block">
                <el-pagination
                  layout="->, prev, pager, next"
                  :total="paginations.total"
                  :page-size="paginations.page_size"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="玩家绘">
            <div class="container">
              <el-row>
                <el-col :xs="{span: 12}" :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <div class="image-frame">
                      <a :href="videoInfo.url" target="_blank">
                        <progressive-background
                          :src="videoInfo.url"
                          :placeholder="placeholder"
                        />
                      </a>
                    </div>
                    <div class="cardInfo">
                      <el-button type="text" class="button">
                        <a :href="videoInfo.authorLink" target="_blank">@{{ videoInfo.author }}</a>
                      </el-button>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="page">
              <div class="block">
                <el-pagination
                  layout="->, prev, pager, next"
                  :total="paginations.total"
                  :page-size="paginations.page_size"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Moment">
            <div class="container">
              <el-row>
                <el-col :xs="{span: 12}" :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <div class="image-frame">
                      <a :href="videoInfo.url" target="_blank">
                       <progressive-background
                          :src="videoInfo.url"
                          :placeholder="placeholder"
                        />
                      </a>
                    </div>
                    <div class="cardInfo">
                      <el-button type="text" class="button">
                        <a :href="videoInfo.authorLink" target="_blank">@{{ videoInfo.author }}</a>
                      </el-button>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="page">
              <div class="block">
                <el-pagination
                  layout="->, prev, pager, next"
                  :total="paginations.total"
                  :page-size="paginations.page_size"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="官方图片">
            <div class="container">
              <el-row>
                <el-col :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <a :href="videoInfo.url" target="_blank">
                      <progressive-img :src="videoInfo.url" class="image">
                    </a>
                    <div class="cardInfo">
                      <el-button type="text" class="button">
                        <a :href="videoInfo.authorLink" target="_blank">@{{ videoInfo.author }}</a>
                      </el-button>
                      <div class="bottom clearfix">
                        <time class="time">{{ videoIDatenfo.date }}</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="page">
              <div class="block">
                <el-pagination
                  layout="->, prev, pager, next"
                  :total="paginations.total"
                  :page-size="paginations.page_size"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>-->
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "https://i.postimg.cc/Tys2gsh2/007a-Wc-NXgy1g01xu25mhpj31ww24zh4i.jpg",
      // tableData: [],
      allTableData: [],
      filterTableData: [],
      currentDate: new Date(),
      videoInfos: [],
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 12, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      }
    };
  },
  created() {
    this.showImages({
      index: 0
    });
  },
  methods: {
    showImages(tab) {
      let type = tab.index;
      // console.log(type);
      if (type == 0) {
        type = "";
      }
      this.$axios
        .get(`/api/images/${type}`)
        .then(res => {
          this.allTableData = res.data;
          this.allTableData.sort(function(a, b) {
            return a.date < b.date ? 1 : -1;
          });
          // 设置分页数据
          this.setPaginations();
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(page) {
      // 当前页
      let sortnum = this.paginations.page_size * (page - 1);
      let table = this.allTableData.filter((item, index) => {
        return index >= sortnum;
      });
      // 设置默认分页数据
      this.videoInfos = table.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    setPaginations() {
      // 总页数
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 12;
      // 设置默认分页数据
      this.videoInfos = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  /* float: right; */
}
.image-frame {
  /* 把溢出框的图片部分 hidden */
  overflow: hidden;
  height: 225px;

}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-card {
  margin-bottom: 15px;
  margin-right: 10px;
  height: 300px;
}
a {
  text-decoration-line: none;
}
.cardInfo {
  padding: 14px;
}
</style>
