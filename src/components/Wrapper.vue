<template>
  <div class="container">
    <Header />
    <Search />
    <Profile />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Profile from '@/components/devDetails.vue'
import Search from '@/components/SearchBar.vue'
export default {
  name: 'Wrapper',
  components: {
    Header,
    Profile,
    Search
  }
}
</script>
<style lang="scss">
  
</style>