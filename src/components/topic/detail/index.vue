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
        <router-link :to="'/topic/' + topic.id">
          <el-link :underline="false">
            <h2>{{topic.title}}</h2>
          </el-link>
        </router-link>
        <p v-html="topic.summary_content"></p>
        <el-row>
          <el-col :span="6">
            <el-link :underline="false" icon="el-icon-s-comment">{{topic.comment_count}}个评论</el-link>
          </el-col>
        </el-row>
        <el-row :gutter="10" >
          <el-input v-model="textarea" placeholder="请输入评论" type="textarea" :rows="2"></el-input>
        </el-row>
        <el-row>
          <el-table :data="topic.comments" style="width: 100%" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <comment-item :comment="scope.row"></comment-item>
              </template>
            </el-table-column>
          </el-table>
        </el-row>

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
import TopicOffside from "../offside";
import CommentItem from "./item";

export default {
  data() {
      return {
        topic: null
      };
  },
  created() {
    let topicId = this.$route.params.id;
    console.log(topicId);
    this.$axios({
      method:'get',
      url:'/topic/detail',
      params: {
        "topic_id" : topicId,
      }
    }).then((response) =>{          //这里使用了ES6的语法
        console.log(response);
        this.topic = response.data;
    }).catch((error) =>{
      console.log(error)       //请求失败返回的数据
    });
  },
  components: {
    "topic-offside": TopicOffside,
    "comment-item": CommentItem
  },
  methods: {}
};
</script>
