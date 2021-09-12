<template>
  <div class="input">
    <label class='input__label' v-if='label' :for='name'>{{ label }}</label>
    <input
      class='input__field'
      :class="{'input__field--error': error}"
      :type='type'
      :name='name'
      :value='modelValue'
      :min='min'
      :max='max'
      @input="handleInput"
    />
    <span v-if='error' class='input__error'>{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: String,
    name: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    error: String,
    min: String,
    max: String
  },
  methods: {
    handleInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input__label {
  padding-left: 4px;
  margin-bottom: 5px;
}

.input__field {
  width: 100%;
  height: 35px;
  margin-bottom: 29px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
}

.input__field--error {
  margin-bottom: 0;
}

.input__error {
  color: red;
  font-size: 10pt;
  padding-left: 4px;
  margin-top: 5px;
  margin-bottom: 9px;
}
</style>
