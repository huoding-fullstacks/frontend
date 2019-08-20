<style lang="scss" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
}
.space-line {
  height: 20px;
}
.title {
  border: none;
}
</style>
<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-row class="space-line"></el-row>
        <el-row>
          <el-input class="title" placeholder="请输入标题"></el-input>
        </el-row>
        <el-row class="space-line"></el-row>
        <el-row>
          <vue-editor v-model="content"></vue-editor>
        </el-row>
        <el-row class="space-line"></el-row>
        <el-row>
          <el-col :span="12">
            <el-button>提交</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    "vue-editor": VueEditor
  },
  data() {
    return {
      content: "<h1>test</h1>"
    };
  }
};
</script>

