<template>
  <TimerForm />
</template>

<script>
import TimerForm from './components/TimerForm.vue'
import './assets/styles/normalize.css'
import './assets/styles/global.css'

export default {
  name: 'App',
  components: {
    TimerForm
  }
}
</script>

<style>
#app {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16pt;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
