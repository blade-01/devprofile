<template>
  <small :class="{err: errorMssg}" v-if="errorMssg">{{errorMssg}}</small>
  <form @submit.prevent="fetchData" class="d-flex">
    <svg class="w-6 h-6 search-icon" fill="none" stroke="var(--link)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    <input type="text" id="search" v-model="params" placeholder="Search for GitHub username..." />
    <input type="submit" value="Search" />
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SearchBar',
  data() {
    return {
      params: '',
    }
  },
  computed: {
    ...mapGetters(['errorMssg']),
  },
  methods: {
    fetchData() {
      this.fetchProfile(this.params);
      this.params = ''
    },
    ...mapActions(['fetchProfile'])
  },
  mounted() {
    this.params = 'blade-01'
    this.fetchData()
  },
}
</script>
<style lang="scss">
form {
  margin: 2rem 0.2rem 1rem 0.2rem;
  padding: 0.5rem;
  border-radius: 10px;
  background: var(--card-bg);
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -80px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  & input[type="text"] {
    padding: 0.8rem 0 0.8rem 2.3rem;
    background: none;
    border: solid 1px transparent;
    outline: none;
    flex-basis: 70%;
    color: var(--text);
    transition: border 0.4s ease;
    margin-right: 0.3rem;
    &::placeholder {
      color: var(--text);
      font-size: 11px;
    }
    &:focus {
      border: dashed 1px var(--link);
    }
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus {
    box-shadow: 0 0 0px 30px var(--card-bg) inset;
    -webkit-text-fill-color: var(--text);
  }
  & input[type="submit"] {
    background: var(--btn);
    padding: 0.8rem 1rem;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 10px;
    flex-basis: 10%;
    margin-left: 0.3rem;
    font-weight: bold;
    cursor: pointer;
  }
  & .search-icon {
    width: 27px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
  }
}
.err {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: #ffffff;
  background: #FA5D5D;
  border: solid 1px #FA5D5D;
  padding: 0.5rem 1rem;;
  border-radius: 0 0 5px 5px;
  flex-basis: 20%;
  animation: top ease 0.5s forwards;
}
@keyframes top {
  to {
    top: 0;
  }
}
@media screen and (min-width: 400px) {
  form {
    & input[type="text"] {
      &::placeholder {
        font-size: unset;
      }
    } 
  }
}
</style>