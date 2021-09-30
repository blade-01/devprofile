import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'
import '@mdi/font/css/materialdesignicons.css'

const store = createStore({
  state() {
    return {
      profile: {},
      error: "",
    }
  },
  getters: {
    getProfile: (state) => state.profile,
    errorMssg: (state) => state.error,
  },
  mutations: {
    fetchProfile(state, data) {
      state.profile = data
    },
    showError(state, payload) {
      state.error = payload;
      setTimeout(() => {
        state.error = "";
      }, 2000);
    },
  },
  actions: {
    async fetchProfile({commit}, user) {
      try {
        const res = await axios.get(`https://api.github.com/users/${user}`);
        commit('fetchProfile', res.data)
      } catch (error) {
        if(error) {
          const errorMssg = "No User"
          commit("showError", errorMssg);
        }
      }
    }
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
