<template>
  <v-dialog v-model="dialog.show" persistent class="mx-auto" max-width="600">
    <v-card>
      <v-card-title class="mt-0 pt-0 ml-0 pl-0 mr-0 pr-0">
        <v-toolbar color="primary">
          <v-toolbar-title>
            <span class="white--text">{{ titulo }}</span>
          </v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="close()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-form ref="formulario" v-model="form.valido" lazy-validation>
          <v-text-field
            v-model="usuario.nome"
            label="Nome"
            name="nome"
            id="nome"
            :rules="rules.nome"
            required
          />
          <v-text-field
            v-model="usuario.email"
            label="E-mail"
            type="email"
            name="e-mail"
            id="e-mail"
            :rules="rules.email"
            required
          />
          <v-text-field
            v-model="usuario.idade"
            label="Idade"
            :rules="rules.idade"
            required
          />
          <v-text-field
            v-model="usuario.telefone"
            label="Telefone"
            name="telefone"
            id="telefone"
            v-mask="'(##)#####-####'"
            :rules="rules.telefone"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn class="pb-2 mb-2" text color="indigo darken-4">Cancelar</v-btn>
        <v-spacer />
        <v-btn class="pb-2 mb-2" color="error" @click="salvar()">
          <span class="pr-4 pl-4 mr-4 ml-4">Salvar</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UserDialog",
  data() {
    return {
      rules: {
        nome: [(v) => !!v || "Nome é obrigatório"],
        email: [
          (v) => !!v || "E-mail é obrigatório",
          (v) => /.+@.+\..+/.test(v) || "E-mail não é válido",
        ],
        idade: [(v) => v.length > 0 || "Idade deve ser maior que zero"],
        telefone: [
          (v) => !!v || "O telefone é obrigatório",
          (v) => v.length >= 14 || "O Formato do telefone é incorreto",
        ],
      },
      form: {
        valido: true,
      },
      dialog: {
        show: false,
      },
      editar: false,
      usuario: {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        nome: "",
        email: "",
        idade: 0,
        telefone: "",
      },
    };
  },
  methods: {
    show(item = {}, edicao = false) {
      this.dialog.show = true;

      if (edicao) {
        this.editar = true;
        this.usuario.nome = item.nome;
        this.usuario.email = item.email;
        this.usuario.idade = item.idade;
        this.usuario.telefone = item.telefone;
      }
    },
    close() {
      this.dialog.show = false;
      this.$refs.formulario.resetValidation();
    },
    salvar() {
      if (!this.$refs.formulario.validate()) {
        return;
      }
      if (this.editar) {
        let usuario = this.usuario;
        this.$emit("salvar-editar", usuario);
      } else {
        let usuario = this.usuario;
        this.$emit("salvar", usuario);
      }
      this.reset();
    },
    reset() {
      this.editar = false;
      this.usuario.nome = "";
      this.usuario.email = "";
      this.usuario.idade = "";
      this.usuario.telefone = "";
      this.$refs.formulario.resetValidation();
      this.dialog.show = false;
    },
  },
  computed: {
    titulo() {
      return this.editar ? "Editar Usuário" : "Adicionar Usuário";
    },
  },
};
</script>

<style>
</style>