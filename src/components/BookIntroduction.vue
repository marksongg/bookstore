<template>
  <div>
      <!-- 使用一个prop属性接收content -->
      <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    name: 'BookIntroduction',
    props:{
        content :{
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>