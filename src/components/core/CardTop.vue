<template>
  <v-container fluid>
    <v-layout row justify-end>
      <v-flex xs12 md3>
        <v-app-bar color="red lighten-2" class="mr-6">
          <v-app-bar-nav-icon>
            <v-flex>
              <v-avatar color="primary" size="36">
                <span>CJ</span>
              </v-avatar>
            </v-flex>
          </v-app-bar-nav-icon>
          <v-container fluid>
            <v-layout row>
              <strong>{{ nome }}</strong>
            </v-layout>
            <v-layout row>
              {{ ultimoAcesso }}
            </v-layout>
          </v-container>

          <v-divider vertical />
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-app-bar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      nome: "Roniere",
      ultimoAcesso: "Último acesso 03/03/2021",
    };
  },
};
</script>

<style>
</style>