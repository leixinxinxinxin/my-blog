<template>
  <div >
    <h1>{{id?'编辑':'新建'}}用户</h1>
    <el-form label-width="120px"  @submit.native.prevent="save">
    <el-form-item label="用户名">
      <el-input v-model="model.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <vue-editor v-model="model.password"> </vue-editor>
      </el-form-item>
    <el-form-item >
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form-item>

  </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props:{
    id:{}
  },
   components: { VueEditor },
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async save(){
      if(this.id){
        await this.$http.put(`admin_user/${this.id}`,this.model);
        }else{
       await this.$http.post('admin_user',this.model)}
      this.$router.push('/admin_user/list');
      this.$message({
        type:'success',
        message:'保存成功'
      });
    },
    async fetch(){
      const res = await this.$http.get(`admin_user/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.id && this.fetch()
  }
}
</script>

<style>

</style>