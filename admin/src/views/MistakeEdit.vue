<template>
  <div >
    <h1>{{id?'编辑':'新建'}}错误记录</h1>
    <el-form label-width="120px"  @submit.native.prevent="save">
    <el-form-item label="错误日志">
      <el-input v-model="model.log"></el-input>
    </el-form-item>
    <el-form-item label="原因">
      <el-input v-model="model.cause"></el-input>
    </el-form-item>
    <el-form-item label="解决方案">
      <vue-editor v-model="model.solution"></vue-editor>
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
  components:{VueEditor},
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async save(){
      if(this.id){
        await this.$http.put(`mistakes/${this.id}`,this.model);
        }else{
       await this.$http.post('mistakes',this.model)}
      this.$router.push('/mistakes/list');
      this.$message({
        type:'success',
        message:'保存成功'
      });
    },
    async fetch(){
      const res = await this.$http.get(`mistakes/${this.id}`)
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