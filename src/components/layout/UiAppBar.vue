<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Podium"
          absolute
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-4"
          src="../../assets/images/Podium-logo@2x.png"
          class="mr-2"
        />

        <v-toolbar-title class="titletext ml-2 mt-1">Case Study Frontend</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/bcp-pcs"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Default</v-tab>
          <v-tab to="/Jwt">Jwt</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titletext {
    font-size: 22px;
}
</style>
