<template>
  <v-app
    style="
    background: linear-gradient(#3a7bd5,#ffffff);
  "
  >
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view> </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      token: null,
      drawer: null,
    };
  },

  created() {
    if (Object.prototype.hasOwnProperty.call(localStorage, "blog_token")) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("blog_token");
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Manrope&family=Montserrat:ital,wght@0,100;0,200;1,200&family=Permanent+Marker&display=swap");

.v-application {
  font-family: "Abel", sans-serif !important;
}
</style>
