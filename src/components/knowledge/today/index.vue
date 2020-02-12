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
.content {
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 1.769230769230769;
}
</style>

<template>

    <div class="container">
        <el-row>
            <h2>
                知识点：{{title}}
            </h2>
            <h4>
                编辑者：{{author}}
            </h4>
        </el-row>
        <el-row>
                <el-collapse accordion>
                    <el-collapse-item v-for="(item,index) in content" v-bind:key="index" :title="item.title" >
                        <div> <a :href="item.link" target="_blank">跳转链接</a></div>
                        <div>{{item.comment}}</div>
                    </el-collapse-item>
                </el-collapse>
        </el-row>
        <el-row>
            <h2>
                选择日期：
            </h2>
        </el-row>
        <el-row>
            <el-calendar v-model="date">
                <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                <template
                        slot="dateCell"
                        slot-scope="{date, data}">
                    <p :class="data.isSelected ? 'is-selected' : ''">
                        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                    </p>
                </template>
            </el-calendar>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
                content: [
                    {
                        "title" : "这是链接标题",
                        "link" : "http://baidu.com",
                        "comment": "一两句评论",
                    },
                    {
                        "title" : "这是链接标题",
                        "link" : "http://baidu.com",
                        "comment": "一两句评论",
                    },
                ],
                title: "这是标题",
                author: "轩脉刃",
            };
        },
        created() {
            let date = new Date();
            let day = date.getDate();
            let dayStr = day < 10? "0" + day : day;
            let month = date.getMonth() + 1;
            let monthStr = month < 10 ? "0" + month : month;
            let year = date.getFullYear();
            let query = year + "-" + monthStr + "-" + day;

            this.$axios({
                method:'get',
                url:'/knowledge/daily',
                params: {
                    "day": query
                }
            }).then((response) => {
                let data = response.data;
                this.content = data.content;
                this.title = data.title;
                this.author = data.author;
            }).catch((error) =>{
                if (error.response) {
                    this.$message({
                        showClose: true,
                        message: error.response.data.msg,
                        type: 'warning'
                    });
                }
            })
        },
        components: {
        },
        watch: {
          date: function(date) {
              console.log(date);
              let day = date.getDate();
              let month = date.getMonth() + 1;
              let year = date.getFullYear();
              let query = year + "-" + month + "-" + day;

              this.$axios({
                  method:'get',
                  url:'/knowledge/daily',
                  params: {
                      "day": query
                  }
              }).then((response) => {
                  let data = response.data;
                  this.content = data.content;
                  this.title = data.title;
                  this.author = data.author;
              }).catch((error) =>{
                  if (error.response) {
                      this.$message({
                          showClose: true,
                          message: error.response.data.msg,
                          type: 'warning'
                      });
                  }

              })
          }
        },
        methods: {
        }
    };
</script>
