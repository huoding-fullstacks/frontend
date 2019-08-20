<style lang="scss" scoped>
.space-line {
  height: 20px;
}
</style>
<template>
  <div>
    <el-row>
      <el-col>{{comment.user}}</el-col>
    </el-row>
    <el-row>
      <p v-html="comment.context"></p>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <div>{{ comment.like_count }}人赞同该评论</div>
        <el-button type="text" @click="triggleCommentInput(1)">评论</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" v-if="commentInputOpen['1'] == true">
      <el-input v-model="textarea" placeholder="请输入评论" type="textarea" :rows="2"></el-input>
    </el-row>
    <el-table :data="comment.comments" :show-header="false">
      <el-table-column>
        <template slot-scope="scope">
          <el-row>{{scope.row.user.name}}</el-row>
          <el-row>{{scope.row.context}}</el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["comment"],
  data() {
    return {
      textarea: "",
      commentInputOpen: {}
    };
  },
  created() {
    this.commentInputOpen = {
      1: false,
      2: false
    };
  },
  methods: {
    triggleCommentInput: function(commentId) {
      this.commentInputOpen[commentId] = !this.commentInputOpen[commentId];
    }
  }
};
</script>

