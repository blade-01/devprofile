import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'
import '@mdi/font/css/materialdesignicons.css'

const store = createStore({
  state() {
    return {
      profile: {}
    }
  },
  getters: {
    getProfile: (state) => state.profile
  },
  mutations: {
    fetchProfile(state, data) {
      state.profile = data
    },
  },
  actions: {
    async fetchProfile({commit}, user) {
      try {
        const res = await axios.get(`https://api.github.com/users/${user}`);
        commit('fetchProfile', res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
