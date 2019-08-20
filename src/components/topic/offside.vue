<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.el-row {
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  margin-top: 20px;
  padding-bottom: 20px;

  &.border-bottom {
    border-radius: 4px;
    border-bottom: 1px solid #dcdfe6;
  }
}
.el-col {
}
</style>

<template>
  <div class="container">
    <el-row class="border-bottom" :gutter="20">
      <el-col :span="4">
        <router-link :to="{name: 'topic-write'}">
          <el-button>
            <i class="el-icon-edit el-icon-right">发表话题</i>
          </el-button>
        </router-link>
      </el-col>
    </el-row>
    <!--
    <el-row class="border-bottom" style="font-size: 12px;" :gutter="20">
      <el-row>欢迎你，轩脉刃</el-row>
      <el-col :span="10">
        <div class="color-dark-light">关注主题数：10</div>
      </el-col>
      <el-col :span="10">
        <div class="color-dark-light">昨日评论数：10</div>
      </el-col>
    </el-row>
    -->
    <el-row style="font-size: 12px; color: #C0C4CC">
      <div class="color-dark-light">电信与服务业务经营许可证</div>
      <div class="color-dark-light">网络文化经营许可证</div>
      <div class="color-dark-light">联系我们 © 2019 全栈网</div>
    </el-row>
  </div>
</template>
