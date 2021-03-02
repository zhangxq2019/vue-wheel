<template>
  <div class="wrapper" :class="{error}">
    <input :value='value' type="text" :readonly="readOnly" :disabled="disabled"/>
    <template v-if="error">
      <icon name="error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon'

export default {
  components: {Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$box-shadow-color: #333;
$border-color-hover: red;
.wrapper {
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  //border: 1px solid red;

  > input {
    height: 32px;
    border: 1px solid var $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }

    .icon-error {
      fill: red;
    }

  }

  &.error {
    > input {
      border-color: yellow;
    }
  }

  .errorMessage {
    color: red;
  }
}
</style>