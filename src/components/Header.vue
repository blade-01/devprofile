<template>
  <div class="profile-header d-flex">
    <h1>devprofile</h1>
    <div class="icons">
      <input type="checkbox" id='theme-switch' class='theme-switch' v-model="lightMode" @click="toggleTheme"/>
        <label for='theme-switch'>
          <span v-if="lightMode === true" class="icon-text d-flex">
            <p>DARK</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="var(--text)" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
          </span>
          <span v-else class="icon-text d-flex">
            <p>LIGHT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="var(--text)" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
          </span>
        </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileHeader',
  data() {
    return {
      lightMode: false,
    }
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("light");
    }
  }
}
</script>

<style scoped lang="scss">
.profile-header {
  color: var(--text-title);
  margin-top: 2rem;
  & h1 {
    font-weight: bolder;
  }
  & .icon-text {
    & p {
      margin-right: 1rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
  }
}
.profile-header input.theme-switch {
  display: none;
  & + label {
    cursor: pointer;
  }
  &:not(:checked) + label:hover {
    cursor: pointer;
  }
  & + label:active,
  &:checked + label {
    cursor: pointer;
  }
}
</style>