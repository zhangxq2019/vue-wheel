<template>
  <div>
    <div class="wrapper">
      <g-input value="文本输入框"></g-input>
      <g-input value="禁止输入" disabled></g-input>
      <g-input value="只读" read-only></g-input>
      <g-input value="world" error="error message"></g-input>
      <div class="box">
        <g-input v-model="message"></g-input>
        {{ message }}
      </div>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{
    'g-input': Input
  },
  data(){
    return{
      message: '双向绑定'
    }
  }
}
</script>