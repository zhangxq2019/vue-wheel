<template>
  <div>
    <g-button-group>
      <g-button icon="left">后退</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">前进</g-button>
    </g-button-group>
  </div>
</template>
<script>
import Button from '../../../src/Button'
import ButtonGroup from '../../../src/button-group'
export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
  }
}
</script>