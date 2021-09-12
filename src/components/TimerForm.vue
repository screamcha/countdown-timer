<template>
  <form class='timer-form' @submit.prevent='handleSubmit'>
    <Input label='Name' name='timer-name' v-model='name' :error='errors.name' />
    <Input type='date' label='Date' name='timer-date' v-model='date' :error='errors.date' :min='minDate' />
    <Button class='timer-form__button' :type='BUTTON_TYPES.SUCCESS'>Create</Button>
  </form>
</template>

<script>
import { addDays } from 'date-fns'
import Input from './Input.vue'
import Button, { BUTTON_TYPES } from './Button.vue'

export default {
  name: 'TimerForm',
  emits: ['submit'],
  components: {
    Input,
    Button
  },
  data () {
    return {
      name: '',
      date: '',
      errors: {}
    }
  },
  methods: {
    handleSubmit () {
      const isValid = this.validateForm()

      if (isValid) {
        this.$emit('submit', this.name, this.date)
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
  },
  computed: {
    minDate () {
      const minDate = addDays(new Date(), 1)
      return minDate.toISOString().split('T')[0]
    }
  },
  created () {
    this.BUTTON_TYPES = BUTTON_TYPES
  }
}
</script>

<style>
.timer-form {
  padding: 10px;
  box-shadow: 0 0 3px 0 grey;
  border-radius: 3px;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 15px;
  width: 100%;

}

@media (max-width: 600px) {
  .timer-form {
    padding: 15px;
    grid-template-columns: 1fr;
    gap: 5px;
    max-width: 300px;
    margin: 0 auto;
  }

  .timer-form__button {
    justify-self: end;
  }
}
</style>
