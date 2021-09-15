import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'
// import store from './store'
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
    // showProfile(state, data) {
    //   state.profile = data
    // }
  },
  actions: {
    async fetchProfile({commit}, {user, errMsg}) {
      const res = await axios.get(`https://api.github.com/users/${user}`);
      if(res.status !== 200) {
        throw new Error(errMsg)
      }
      console.log(res.data)
      commit('fetchProfile', res.data)
    }
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
