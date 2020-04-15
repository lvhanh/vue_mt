<template>
  <div class="body">
    <div class="content">
      <h3>此为练习前端而做的练手项目</h3>
      <div class="text">
        <span class="title">实现了部分功能：</span>
        <ul>
          <li>1.首页+注册登录页+商品详情页+订单页。因数据原因只能展示部分内容</li>
          <dl>
            <dd><span>></span>首页显示城市及用户，搜索栏中可以搜索火锅来展示详情内容</dd>
            <dd><span>></span>注册用户通过邮箱注册，用户名登录</dd>
            <dd><span>></span>详情页有地图位置展示，排序</dd>
            <dd><span>></span>订单页点击付款直接变为已付款并进入订单列表</dd>
          </dl>
          <li>2.前端使用vue,后端使用koa</li>
        </ul>
      </div>
      <div class="button">
        <el-button type="primary" @click="submit">进入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout : "blank",
  methods : {
    submit(){
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style lang="scss">
  .body{
    font-size: 14px;
    background: #fff;
    ul,li{
      list-style: none;
    }
    .content{
      width: 980px;
      margin: 0 auto;
      .text{
        text-align: left;
        ul{
          padding: 0;
          dl{
            dd{
              margin-left: 15px;
              margin-top: 10px;
              span{
              color: #8a8c8e;
            }
            }
          }
        }
        .title{
          font-size: 20px;
          color: black;
        }
      }
      h3{
        text-align: center;
        color: #224b8f;
        font-size: 30px;
      }
      .button{
        text-align: center;
        margin-top: 100px;
        .el-button{
          width: 120px;
        }
      }
    }
  }
</style>
