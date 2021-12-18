<template>
  <div class="container">
    <div class="top-bar">
      <form action="" class="text-center">
        <input type="text" class="input" placeholder="请输入" />
        <!-- <i class="iconfont icon-search btn"></i> -->
        <input type="button" value="搜索" @click="search" class="btn" />
      </form>
    </div>
    <div class="d-flex jc-around body">
      <div class="side-bar">
        <div class="tag">
          <h2 class="title">leixin的博客</h2>
          <div class="item">
            <i class="iconfont icon-shouye "></i>
            <router-link to="/">首页</router-link>
          </div>
          <div class="item">
            <i class="iconfont icon-jichuzhishi"></i>
            <router-link to="/javascript">js</router-link>
          </div>
          <div class="item">
            <i class="iconfont icon-gongju"></i>
            <router-link to="/kits">工具包</router-link>
          </div>
          <div class="item">
            <i class="iconfont icon-wj-jczj"></i>
            <router-link to="/mistake">错误记录</router-link>
          </div>
        </div>
        <div class="about">
          <div>
            <img  src="../assets/img/cute.jpg" alt="" />
            
          </div>
          
          <div class="text-center fs-sm">联系方式：17835299489</div>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    search(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .top-bar {
    height: 130px;
    background: #64363c;

    form {
      
      
      padding-top:50px;
      
      .input{
        width: 40%;
        line-height:2.5rem;
        
        outline: none;
        border: none;
        border-radius:4px 0 0 4px;
      }
      .btn{
        // background: #fff;
        width: 5%;
        line-height:2.5rem;
        border: none;
        outline: none;
         border-radius:0 4px 4px 0;
      }
    }
  }
  .body {
    background: rgb(235, 231, 231);
    height: 100vh;
  }
  .side-bar {
    width: 20%;
    height: 100%;

    margin-top: 3px;
    margin-left: 40px;
    .tag {
      .title {
        margin: 45px 0;
      }
      height: 250px;

      padding: 35px;
      border-bottom: 1px solid #d4d9de;
      .item {
        padding: 6px 0;
      }
    }
    .about {
      margin: 30px 8px;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background: rgb(238, 180, 180);
      img{
        display: inline-block;
        margin:10px 100px;
      }
    }
  }
  .content {
    margin-top: 9px;
    width: 60%;
  }
}
</style>