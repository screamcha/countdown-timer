<template>
  <form class='timer-form' @submit.prevent='handleSubmit'>
    <Input label='Name' name='timer-name' v-model='name' :error='errors.name' />
    <Input type='date' label='Date' name='timer-date' v-model='date' :error='errors.date' />
    <Button :type='BUTTON_TYPES.SUCCESS'>Create</Button>
  </form>
</template>

<script>
import Input from './Input.vue'
import Button, { BUTTON_TYPES } from './Button.vue'

export default {
  name: 'TimerForm',
  components: {
    Input,
    Button
  },
  data () {
    return {
      name: '',
      date: '',
      errors: {},
      BUTTON_TYPES
    }
  },
  methods: {
    handleSubmit () {
      const isValid = this.validateForm()

      if (isValid) {
        console.log(this.name, this.date)
      }
    },
    validateForm () {
      this.errors = {}
      if (!this.name) {
        this.errors.name = 'Must be specified!'
      }
      if (!this.date) {
        this.errors.date = 'Must be specified!'
      }

      if (Object.keys(this.errors).length) {
        return false
      }
      return true
    }
  }
}
</script>

<style>
.timer-form {
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 15px;
  padding: 0 10px;
}
</style>
