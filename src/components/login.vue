<template>
    <div>
     登录组件

     <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
</template>
           
<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
<style scoped lang="less">
            
</style>