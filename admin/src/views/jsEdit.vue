<template>
  <div >
    <h1>{{id?'编辑':'新建'}}js</h1>
    <el-form label-width="120px"  @submit.native.prevent="save">
    <el-form-item label="题目">
      <el-input v-model="model.title"></el-input>
    </el-form-item>
    <el-form-item label="内容">
        <vue-editor v-model="model.body"> </vue-editor>
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
        await this.$http.put(`javascript/${this.id}`,this.model);
        }else{
       await this.$http.post('javascript',this.model)}
      this.$router.push('/javascript/list');
      this.$message({
        type:'success',
        message:'保存成功'
      });
    },
    async fetch(){
      const res = await this.$http.get(`javascript/${this.id}`)
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