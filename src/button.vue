<template>
  <div>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
     <span class="content">
        <slot></slot>
     </span>
    </button>
  </div>
</template>
<script>
export default {
  // props: ['icon','iconPosition']
  props: {
    icon: {},
    loading:{
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
  padding: 0 1em;
  font-size: var(--font-size);
  height: var(--button-height);
  color: var(--color);
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .icon {
    width: 1em;
    height: 1em;
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
     > .icon {
       order: 2;
       margin-right: 0;
       margin-left: .1em;
     }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>