<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">图标按钮</g-button>
    <g-button icon="setting" icon-position="right">图标按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
  </div>
</template>
<script>
import Button from '../../../src/Button'
export default {
  components: {
    'g-button': Button,
  }
}
</script>