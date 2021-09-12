<template>
  <button
    class='button'
    :class='{
      [`button__${type}`]: type
    }'
    @click='handleClick'
    >
    <slot></slot>
  </button>
</template>

<script>
export const BUTTON_TYPES = {
  SUCCESS: 'success',
  INFO: 'info'
}

export default {
  name: 'Button',
  props: {
    label: String,
    type: {
      validator (value) {
        return Object.values(BUTTON_TYPES).includes(value)
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.button {
  height: 35px;
  cursor: pointer;
  background-color: white;
  border-width: 1px;
  border-color: var(--border-color);
  color: inherit;
  border-radius: 3px;
}

.button__success {
  color: white;
  background-color: #28a745;
}

.button__info {
  background-color: lightskyblue;
}
</style>
