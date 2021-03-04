<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md2>
          <UserSearch @buscar="search = $event"/>
        </v-flex>
        <v-spacer />
        <v-flex xs12 md2></v-flex>
        <v-flex xs12 md2>
          <v-combobox
            v-model="filtro"
            :items="itemsFiltro"
            solo
            class="mr-2 pa-1"
          ></v-combobox>
        </v-flex>
        <v-flex>
          <v-btn color="red accent-2" @click="$refs.dialogUser.show()">
            <v-icon color="white" left>mdi-account-plus</v-icon>
            <span class="white--text"> Novo Usuário </span>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-row dense>
        <v-col cols="12">
          <v-alert dense type="info" v-show="getUsuarios.length == 0">
            <p class="text-center">
              {{ messagem }}
            </p>
          </v-alert>
        </v-col>
        <v-col cols="12">
          <v-alert
            dense
            type="info"
            v-show="NaoEncontrado"
          >
            <p class="text-center">
              "Não há usuários com os critérios de busca utilizado
            </p>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-layout justify-space-around row>
        <v-flex
          v-for="(item, index) in searchItems"
          :key="index"
          shrink
          pa-1
          xs12
          md3
       >
          <user-card
            :nome="item.nome"
            :email="item.email"
            :avatar="item.avatar"
            :idade="item.idade"
            :telefone="item.telefone"
          >
          </user-card>
        </v-flex>
      </v-layout>
    </v-container>
    <UserDialog ref="dialogUser" @salvar="adicionar($event)" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UserCard: () => import("./components/UserCard"),
    UserDialog: () => import("./components/UserDialog"),
    UserSearch: () =>import("./components/UserSearch")
  },
  data() {
    return {
      filtro: "todos",
      search: "",
      itemsFiltro: ["todos", "Maior que 30 anos", "Menor que 18 anos"],
      usuarios: [],
      messagem: "Nenhum dado cadastrado",
     
    };
  },
  methods: {
    ...mapActions(["setUsuario"]),
    adicionar(event) {
      let usuario = Object.assign({}, event);
      this.setUsuario(usuario);
    }
  
  },
  computed: {
    ...mapGetters(["getUsuarios"]),
    showNenhumDadoCadastrado() {
      return this.getUsuarios.length == 0;
    },
    NaoEncontrado(){
        return this.search != "" && this.searchItems.length === 0
    },
    
    
    searchItems() {
      
     
      let users = [];
       if (this.filtro === "Maior que 30 anos") {
        users = [];
        users  = this.usuarios.filter(
          (usuario) => usuario.idade > 30
        );
      } else if (this.filtro === "Menor que 18 anos") {
        users = [];
        users = this.usuarios.filter(
          (usuario) => usuario.idade < 18
        );
      } else {
        users = [];
        users = this.getUsuarios
       
      }
      
      let search = this.search;
      if (search == "") return users;
      const regexp = new RegExp(search, 'i');
     
       return users.filter(x => regexp.test(x.nome) || regexp.test(x.email))
      
    }
    
  },
  mounted() {
    this.usuarios = this.getUsuarios;
  },
};
</script>

<style>
</style>