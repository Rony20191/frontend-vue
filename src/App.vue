<template>
  <v-app>
    <AppBar/>

    <v-main class="mr-8 pr-8">
      <v-container fluid>
      <UserListCard/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    AppBar: () => import('@/components/core/AppBar'),
    UserListCard: () => import("@/views/list-view/UserListCard")
  },

  data: () => ({
    //
  })
};
</script>
