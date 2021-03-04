<template>
  <v-app-bar app color="red accent-2" dark>
    <v-spacer />
    <card-top />
  </v-app-bar>
</template>

<script>
export default {
  components: {
    CardTop: () => import("./CardTop"),
  },
  name: "AppBar",
  data() {
    return {
      show: false,
      messages: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "John Leider",
        },
      ],
    };
  },
};
</script>

<style>
</style>