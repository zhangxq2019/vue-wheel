<template>
  <div class="wrapper" :class="{error}">
    <input :value='value' type="text" :readonly="readOnly" :disabled="disabled"
    @change="$emit('change',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    @focus="$emit('focus',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"/>
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
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$border-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  //border: 1px solid red;

  > input {
    height: $height;
    border: 1px solid var $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    margin: 0.2em 0;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $border-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: $border-color;
      cursor: not-allowed;
    }

    .icon-error {
      fill: $red;
    }

  }

  &.error {
    > input {
      border-color: $border-color;
    }
  }

  .errorMessage {
    color: $red;
  }
}
</style>