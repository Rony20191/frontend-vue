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
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppBar: () => import('@/components/core/AppBar'),
    UserListCard: () => import("@/views/list-view/UserListCard")
  },

  data: () => ({
    //
  })
};
</script>
