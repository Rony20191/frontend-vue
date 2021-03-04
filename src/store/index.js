import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    ativo:    false,
    usuarios: JSON.parse(localStorage.getItem('usuarios')) || []
  },
  mutations: {
    setUsuario(state,payload){

        let usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : []
        usuarios.push(payload)
        localStorage.setItem('usuarios',JSON.stringify(usuarios))
        state.usuarios = usuarios;
    },
    setAtivo(state,payload){
      state.ativo = payload;
      localStorage.setItem('ativo',payload)
    }
  },
  actions: {
    setUsuario({commit},payload){
      commit('setUsuario',payload)
    },
    setAtivo({commit},payload){
      commit('setAtivo',payload)
    },
  },
  getters: {
    getUsuarios(state){
      return state.usuarios
    },
    getAtivo({state}){
      return state.ativo
    }
  },
  modules: {
  }
})

Vue.prototype.$store = store;
export default store;