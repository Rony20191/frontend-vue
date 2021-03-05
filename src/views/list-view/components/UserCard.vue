<template>
  <div>
    <v-card elevation="2" class="mx-auto" max-width="300">
      <v-card-title class="pl-1 ml-1">
        <v-avatar class="pa-2 ma-2">
          <img :src="usuario.avatar" :alt="usuario.nome" />
        </v-avatar>
        <span
          ><strong>{{ usuario.nome }}</strong></span
        >
      </v-card-title>
      <v-card-subtitle class="mr-0 ml-0 pr-0 pl-0">
        <v-divider class="mr-0 ml-0 pr-0 pl-0" />
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8" sm="12">
            <div class="text--primary">
              {{ usuario.email }}
            </div>
            <div class="text--primary">
              {{ `${usuario.idade + " anos "}` }} {{ usuario.telefone }}
            </div>
          </v-col>
          <v-col cols="12" md="2" sm="12">
            <v-btn
              id = "edit-button"
              fab
              class="pa-1 ma-1"
              @click="$refs.dialogUser.show(usuario, true)"
            >
              <v-icon color="indigo darken-4"> mdi-pencil </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="2" sm="12">
            <v-btn icon class="pa-1 ma-2">
              <v-icon color="indigo darken-4"> mdi-dots-horizontal </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <UserDialog ref="dialogUser" @salvar-editar="editar($event)" />
  </div>
</template>

<script>

export default {
  components: {
    UserDialog: () => import("./UserDialog"),
  },
  props: {
    ativo: {
      type: Boolean,
      default: false,
      requiered: true,
    },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    idade: {
      requiered: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
    },
    avatar: {
      type: String,
      requiered: true,
    },
  },
  data() {
    return {
      usuario: {
        avatar: this.avatar,
        id: this.id,
        nome: this.nome,
        email: this.email,
        idade: this.idade,
        telefone: this.telefone,
      },
    };
  },
  methods: {
    editar(value) {
      Object.assign(this.usuario, value);
    },
  },
  watch: {
     ativo: {
      handler(val){
        this.usuario.ativo = val;
      }
    },
    nome: {
      handler(val){
        this.usuario.nome = val;
      }
    },
    email: {
      handler(val){
        this.usuario.email = val;
      }
    },
    idade: {
      handler(val){
        this.usuario.idade = val;
      }
    },
    telefone: {
      handler(val){
        this.usuario.telefone = val;
      }
    },
    id: {
      handler(val){
        this.usuario.id = val;
      }
    },
    avatar: {
      handler(val){
        this.usuario.avatar = val;
      }
    },
  }
};
</script>

<style>
</style>