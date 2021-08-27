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
  SUCCESS: 'success'
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
  border-radius: 3px;
}

.button__success {
  color: white;
  background-color: #28a745;
}
</style>
