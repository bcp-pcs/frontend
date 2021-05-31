<template>
  <v-app>
    <ui-app-bar />

    <v-container class="bodycon">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import UiAppBar from './components/layout/UiAppBar.vue';

export default {
  name: 'App',

  components: {
    UiAppBar,
  },

  data: () => ({
    //
  }),
};
</script>
ß
<style scoped>
.bodycon {
  margin-top: 105px;
}
</style>
