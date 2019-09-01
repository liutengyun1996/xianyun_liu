<template>
  <div>
    <div style="padding:20px;margin-5px">
      <span v-for="(item,index) in ['新闻','体育','娱乐']" :key="index"
      @click="ddd(index)"
      >{{item}}</span>
    </div>
    <div v-show="current===0">
      <ul>
        <li>中秋一点都不快乐</li>
        <li>中秋一点都不快乐</li>
        <li>中秋一点都不快乐</li>
      </ul>
    </div>
    <div v-show="current===1">
      <ul>
        <li>国足真垃圾</li>
        <li>国足真垃圾</li>
        <li>国足真垃圾</li>
      </ul>
    </div>
    <div v-show="current===2">
      <ul>
        <li>且行且珍惜</li>
        <li>且行且珍惜</li>
        <li>且行且珍惜</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods:  {
      ddd(index){
          this.current=index
      }
  }
};
</script>

<style lang="less" scoped> 
</style>