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
        <el-row style="margin-top: 20px;">
            <el-date-picker
                    v-model="value1"
                    type="week"
                    format="yyyy 第 WW 周"
                    placeholder="选择周">
            </el-date-picker>
        </el-row>
        <el-row>
            <h2>
                本周知识点：OpenResty
            </h2>
        </el-row>
        <el-row>
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="入门" name="1">
                    <div>Lua Unofficial FAQ (uFAQ)：<a href="http://www.luafaq.org/">http://www.luafaq.org/</a></div>
                    <div>Lua Performance Tips：https://www.lua.org/gems/sample.pdf</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </el-row>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                value1: '',
                activeName: '1'
            };
        },
        created() {
        },
        components: {
        },
        methods: {
        }
    };
</script>
