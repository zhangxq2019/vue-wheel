<template>
  <div class="collapseItem">
    <div class="title" @click="open=!open">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      open: false
    }
  }
}
</script>
<style lang="scss" scoped>
.collapseItem {
  > .title {
    border: 1px solid red;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child{
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child{
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .content {
    padding: 8px;
  }
}
</style>