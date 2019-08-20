<template>
  <div>
    <router-link :to="'/topic/' + topic.id">
      <el-link :underline="false">
        <h2>{{topic.title}}</h2>
      </el-link>
    </router-link>

    <p v-html="topic.content_summary"></p>
    <el-row>
      <el-col :span="6">
        <div>
          <el-link :underline="false" icon="el-icon-caret-top">赞同 {{topic.like_count}}</el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <el-link :underline="false" icon="el-icon-s-comment">{{topic.comment_count}}个评论</el-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "topicItem",
  props: ["topic"]
};
</script>

