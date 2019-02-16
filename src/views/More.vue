<template>
  <!-- 别自动格式化 寻人启事会有空格！ -->
  <div class="more">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18" :xs="{span: 24}">
        <el-tabs type="border-card">
          <el-tab-pane label="Game" :lazy="true">
            <div class="title">
              <span>寻<span style="color: #2f93fd;">人</span><span style="color: #eb6985;">琪</span>事</span><span class="thanks">Thanks!</span>
            </div>
            <div class="game-rule">
              <i class="el-icon-warning"></i> 将鼠标放在 77 身上即游戏开始，77 将会跟随鼠标移动。快去寻找 66 吧！
              <br>
              <i class="el-icon-bell"></i> 特别鸣谢像素图制作者 <a href="https://weibo.com/u/3756355105" target="_blank">@YOHUEY</a> 
            </div>
            <br>
            <div class="timer">
              <i class="el-icon-time"></i>
              {{ min }}:{{ sec }}
            </div>
            <el-row type="flex" class="row-bg" justify="center" >
             <el-col :span="15" :xs="{span: 24}">
            <!-- <el-button type="primary" plain>你好</el-button> -->
            <maze class="game" @start="startTimer" @finish="finishGame" @init="initGame" :image-path="image77" :goal-image-path="image66"></maze>
            </el-col>
            </el-row>

            <el-dialog
              width="300px"
              title="恭喜你帮 77 找到了 66！👏👏🎉🎉🔒🔒"
              :visible.sync="dialogFormVisible"
            >
                  <el-dialog width="200px" title="🤔" :visible.sync="innerVisible" append-to-body>
                    <span>确认提交？</span>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="innerVisible = false">取 消</el-button>
                      <el-button type="primary" @click="submitForm">确 定</el-button>
                    </div>
                  </el-dialog>
              <div class="record">耗时 {{ form.record }}，留下你的战绩吧！</div>
              <br>
              <el-form :model="form" :rules="rules">
                <el-form-item label="留个名吧：" prop="name">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="有话要说？" prop="message">
                  <el-input v-model="form.message" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="controlInner">确 定</el-button>
              </div>
            </el-dialog>

            
            <el-table :data="forms" style="width: 100%" :show-header=false>
                 <el-table-column width="200">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ new Date(scope.row.date).toLocaleString() }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" width="160"></el-table-column>
              <el-table-column prop="message" width="560"></el-table-column>
              <el-table-column width="110" fixed="right">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.record }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Maze from "vue-maze";
import Message from "element-ui";

export default {
  data() {
    return {
      min: 0,
      sec: 0,
      msec: 0,
      efreshIntervalId: 0,
      dialogFormVisible: false,
      innerVisible: false,
      // formLabelWidth: "100%",
      forms: [],
      form: {
        name: "",
        message: "",
        record: "",
        date: Date.now
      },
      image66: "https://i.postimg.cc/PrZwMtXf/maze-end.png",
      image77: "https://i.postimg.cc/jSbJgG2H/maze-start.png",
      rules: {
        name: [
          { required: true, message: "名字不能为空", trigger: "change" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        message: [
          { required: false },
          {
            min: 0,
            max: 140,
            message: "长度在 0 到 140 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    Maze
  },
  created() {
    this.$axios.get(`/api/forms`).then(res => {
      // console.log(res);
      if (res.data.length > 0) {
        // 按游戏通过时间从小到大
        res.data.sort(function(a, b) {
          return a.record > b.record ? 1 : -1;
        });
        this.forms = res.data;
      }
    });
  },
  methods: {
    startTimer() {
      let that = this;
      this.refreshIntervalId = setInterval(function() {
        that.msec = that.msec + 1;
        if (that.msec === 100) {
          that.msec = 0;
          that.sec = that.sec + 1;
          if (that.sec === 60) {
            that.min = that.min + 1;
          }
        }
        // console.log(that.time)
      }, 10);
    },
    initGame() {
      clearInterval(this.refreshIntervalId);
      this.sec = 0;
      this.msec = 0;
      this.min = 0;
    },
    finishGame() {
      this.form.record =
        (this.min < 10 ? "0" + this.min : this.min) +
        ":" +
        (this.sec < 10 ? "0" + this.sec : this.sec) +
        "." +
        (this.msec < 10 ? "0" + this.msec : this.msec);
      this.form.date = Date.now();
      // console.log(this.form.date)
      this.dialogFormVisible = true;
    },
    controlInner() {
      if (this.form.name.length > 0 && this.form.name.length <= 20) {
        this.innerVisible = true;
      }
    },
    submitForm() {
      this.innerVisible = false;
      this.dialogFormVisible = false;
      this.$axios.post("/api/forms", this.form).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        // 如果直接传 this.form 是传引用 之后 this.form 的改变也会引起 forms 的改变
        this.forms.unshift(JSON.parse(JSON.stringify(this.form)));
        this.form.name = "";
        this.form.message = "";
        this.form.record = "";
        this.form.date = null;
      });
    }
  }
};
</script>

<style scoped>
.game {
  width: 100%;
  height: 400px;
  /* height: 20px; */
  margin: 30px auto;
  /* margin-bottom: 60px */
}
.title {
  margin: 50px;
  text-align: center;
  font-size: 30px;
}
.thanks {
  font-size: 10px;
  color: blueviolet;
}
.game-rule {
  text-align: center;
}
.timer {
  text-align: center;
}
.el-table .warning-row {
  background: rgb(255, 202, 104);
}

.el-table .success-row {
  background: #6fff21;
}
</style>
