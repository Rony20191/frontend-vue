<template>
   <v-text-field
            v-model="search"
            @keypress="buscar()"
            @keydown="buscar()"
            hide-details
            placeholder="Busque por nome ou emails"
            prepend-icon=""
            append-icon="mdi-magnify"
            solo
            single-line
          ></v-text-field>
</template>

<script>
export default {
  name:'UserBuscar',
  data(){
      return {
          search: '',
      }
  },methods:{
      buscar(){
          this.$emit("buscar",this.search)
      }
  }

}
</script>

<style>

</style>