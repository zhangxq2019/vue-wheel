<template>
  <div>
<!--    <button class="g-button" v-if="iconPosition === 'right'">-->
<!--      <svg v-if="icon" class="icon">-->
<!--        <use :xlink:href="`#i-${icon}`"></use>-->
<!--      </svg>-->
<!--      <slot></slot>-->
<!--    </button>-->
<!--    <button class="g-button" v-else>-->
<!--      <slot></slot>-->
<!--      <svg v-if="icon" class="icon">-->
<!--        <use :xlink:href="`#i-${icon}`"></use>-->
<!--      </svg>-->
<!--    </button>-->
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <svg v-if="icon" class="icon">
        <use :xlink:href=`#i-${icon}`></use>
      </svg>
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
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return value === 'left' && value === 'right'
      }
    }
  }
}
</script>
<style lang="scss">
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
}
</style>