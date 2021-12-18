<template>
  <div>
      <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>知识点</template>
        <el-menu-item-group>
          <template slot="title">javascript</template>
          <el-menu-item index="/javascript/create">新建js</el-menu-item>
          <el-menu-item index="/javascript/list">js列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">工具包</template>
          <el-menu-item index="/kits/create">新建工具包项目</el-menu-item>
          <el-menu-item index="/kits/list">工具包列表</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">错误记录</template>
          <el-menu-item index="/mistakes/create">新建错误记录</el-menu-item>
          <el-menu-item index="/mistakes/list">错误记录列表</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
    
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>雷鑫</span>
    </el-header>
    
    <el-main>
      <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>



<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>

 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
