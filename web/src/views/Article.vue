<template>
 <div>
     <div class="article" v-for="(item, i) in items" :key="i">
        <div class="text-center"><h4>{{ item.title }}</h4></div>
        <div v-html="item.body" class="details fs-sm"></div>
        <div class="text-right date">{{ item.createdAt | date }}</div>
      </div>
 </div>
</template>

<script>
import dayjs from "dayjs";
export default {
     filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
    data(){
        return{
           items:[] 
        }
    },
      methods: {
    async fetch() {
      const res = await this.$http.get("javascript");
      console.log(res);
      this.items = res.data;
    },
  },
  created() {
    this.fetch();
  },
    
}
</script>

<style lang="scss" scoped>
.article {
      background-color:#F3F4EE;
      border: 1px solid #d4d9de;
      box-shadow: 1px 1px  #F5EBE2;
      margin: 15px 0;
      border-radius: 3px;
     
      .details {
        text-overflow: ellipsis; /*设置隐藏部分为省略号*/
        overflow: hidden; /*设置隐藏*/
        display: -webkit-box;
        -webkit-line-clamp: 3; /*设置显示行数，此处为2行，可设置其他数字*/
        -webkit-box-orient: vertical;
        line-height:0.5rem;
         padding:1px 6px;
      }

      .date{
          font-size:15px;
          color:#888;
          margin:6px 11px;
      }
    }
</style>