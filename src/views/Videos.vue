<template>
  <div class="videos">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18" :xs="{span: 24}">
        <el-tabs type="border-card" @tab-click="showVideos">
          <el-tab-pane label="All">
            <div class="container">
              <el-row>
                <el-col
                :xs="{span: 12}"
                :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <a :href="videoInfo.url" target="_blank">
                      <progressive-background
                        :src="videoInfo.image"
                        class="image"
                        :placeholder="placeholder"
                      />
                    </a>
                    <div style="padding: 14px">
                      <div class="title">{{ videoInfo.title }}</div>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                        <el-button type="text" class="button">
                          <a
                            :href="videoInfo.authorLink"
                            target="_blank"
                            v-show="videoInfo.author"
                          >{{ videoInfo.author }}</a>
                          <el-dropdown
                            trigger="click"
                            v-show="!videoInfo.author"
                            @command="handleCommand"
                          >
                            <span class="el-dropdown-link">视频选集</span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item
                                v-for="episode in videoInfo.episode"
                                :key="episode.title"
                                :command="episode.link"
                              >{{ episode.title }}</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                        </el-button>
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
          <el-tab-pane label="玩家剪辑">
            <div class="container">
              <el-row>
                <el-col :xs="{span: 12}" :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <a :href="videoInfo.url" target="_blank">
                      <progressive-background
                        :src="videoInfo.image"
                        class="image"
                        :placeholder="placeholder"
                      />
                    </a>
                    <div style="padding: 14px;">
                      <div class="title">{{ videoInfo.title }}</div>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                        <el-button type="text" class="button">
                          <a :href="videoInfo.authorLink" target="_blank">{{ videoInfo.author }}</a>
                        </el-button>
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
                    <a :href="videoInfo.url" target="_blank">
                      <progressive-background
                        :src="videoInfo.image"
                        class="image"
                        :placeholder="placeholder"
                      />
                    </a>
                    <div style="padding: 14px;">
                      <div class="title">{{ videoInfo.title }}</div>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                        <el-button type="text" class="button">
                          <a :href="videoInfo.authorLink" target="_blank">{{ videoInfo.author }}</a>
                        </el-button>
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
          <el-tab-pane label="官方视频">
            <div class="container">
              <el-row>
                <el-col :xs="{span: 12}" :span="6" v-for="(videoInfo, index) in videoInfos" :key="index" :offset="0">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <a :href="videoInfo.url" target="_blank">
                      <progressive-background
                        :src="videoInfo.image"
                        class="image"
                        :placeholder="placeholder"
                      />
                    </a>
                    <div style="padding: 14px;">
                      <div class="title">{{ videoInfo.title }}</div>
                      <div class="bottom clearfix">
                        <time
                          class="time"
                        >{{ new Date(videoInfo.date).toLocaleDateString() }}</time>
                        <el-button type="text" class="button">
                          <a
                            :href="videoInfo.authorLink"
                            target="_blank"
                            v-show="videoInfo.author"
                          >{{ videoInfo.author }}</a>
                          <el-dropdown
                            trigger="click"
                            v-show="!videoInfo.author"
                            @command="handleCommand"
                          >
                            <span class="el-dropdown-link">视频选集</span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item
                                v-for="episode in videoInfo.episode"
                                :key="episode.title"
                                :command="episode.link"
                              >{{ episode.title }}</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                        </el-button>
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
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder:
        "https://i.postimg.cc/yWcKcB7j/7f91f475bf7c53075ddc16817c652532db72a7f1.jpg",
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
    this.showVideos({
      index: 0
    });
  },
  methods: {
    onLoad() {
      console.log("main image is loaded");
    },
    onLoadPlaceholder() {
      console.log("placeholder image is loaded");
    },
    onError(error) {
      // main image error
    },
    onErrorPlaceholder(error) {
      console.log("placeholder image error");
    },
    showVideos(tab) {
      let type = tab.index;
      // console.log(type);
      if (type == 0) {
        type = "";
      }
      this.$axios
        .get(`/api/videos/${type}`)
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
    },
    handleCommand(command) {
      window.location.href = command;
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
  float: right;
}

.image {
  /* height: 240px; */
  height: 156.25px;
  width: 100%;
  display: block;
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
  margin-right: 5px;
  margin-left: 5px;
  height: 250px;
}

a {
  text-decoration-line: none;
}

.el-dropdown-link {
  /* color: #eb6985; */
  font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB,
    Microsoft YaHei, sans-serif;
}
.title {
  font-size: 14px;
  height: 40px;
  overflow: hidden;
}

</style>
