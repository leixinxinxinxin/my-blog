<template>
  <table border="1">
      <tr>
          <td>工具包</td>
          <td>作用</td>
          <td>使用</td>

      </tr>
      <tr v-for="item,i in kits" :key="i">
          <td>{{item.name}}</td>
          <td>{{item.effect}}</td>
          <td v-html="item.use"></td>
      </tr>
  </table>
</template>

<script>
export default {
    data(){
        return{
            kits:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('kits')
            this.kits = res.data
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style>

</style>