<style lang="scss" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #f2f6fc;
}
.bg-white {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<template>
  <div class="container">
    <el-row>
      <el-col :span="16">
        <div class="grid-content">
          <el-table :data="topics" style="width: 100%" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <topic-item :topic="scope.row"></topic-item>
              </template>
            </el-table-column>
            <p slot="append" style="text-align:center; line-height:50px;" v-loading="loading">
              <a href="javascript:;" @click="loadMoreTopic()" class="blue01">点击加载更多</a>
            </p>
          </el-table>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-white"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <topic-offside></topic-offside>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//import topicItem from "@/components/topic/item.vue";
import topicItem from "./item";
import TopicOffside from "../offside";

export default {
  data() {
    return {
      loading: false,
      topics: [],
      scrollYt: 0
    };
  },
  created() {
    this.topics = this.getTopics(1, 10);
  },
  components: {
    "topic-item": topicItem,
    "topic-offside": TopicOffside
  },
  methods: {
    loadMoreTopic() {
      this.scrollYt = window.scrollY;
      this.loading = true;
      var newTopics = this.getTopics(1, 0);
      newTopics.map(item => this.topics.push(item));
      console.log(this.topics);
      this.loading = false;
      console.log(0, this.scrollYt);
      window.scrollY = this.scrollYt;
    },
    getTopics(page, num) {
      this.$axios({
        method:'get',
        url:'/topic/list',
        params: {
          "page" : page,
          "size": num
        }
      }).then((response) =>{          //这里使用了ES6的语法
          let data = response.data;
          this.topics = data.topics;
          console.log(this.topics);
      }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
      })


    }
  }
};
</script>
