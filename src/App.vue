<template>
  <Wrapper />
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
  name: 'App',
  components: {
    Wrapper
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
@import '@/components/styles/variables.scss';
body {
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  color: var(--text);
  background: var(--body-bg);
  line-height: 1.5;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.2s ease;
}
h1 {
  font-family: 'PT Sans', sans-serif;
}
input {
  font-family: 'Space Mono', monospace;
}
button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.container {
  width: 90%;
  margin: auto;
  overflow: hidden;
}
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (min-width: 700px) {
  .container {
    width: 650px;
  }
}
</style>
