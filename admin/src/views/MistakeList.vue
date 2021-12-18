<template>
  <el-table :data="items">
    <el-table-column prop="_id" label="ID" width="230px"> </el-table-column>
    
    <el-table-column prop="log" label="错误记录"> </el-table-column>
    <el-table-column prop="cause" label="原因"> </el-table-column>
    <el-table-column prop="solution" label="解决方案"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="190">
      <template slot-scope="scope">
        
        <el-button type="text"  @click="$router.push(`/mistakes/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="text"  @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("mistakes");
      this.items = res.data;
    },
    async remove(row){
        this.$confirm(`是否确定要删除记录${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            await this.$http.delete(`mistakes/${row._id}`)
          this.$message({
              
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
       
    },
   
  },
  created() {
    this.fetch();
  },
}
</script>

<style>

</style>