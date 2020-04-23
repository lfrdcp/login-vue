<template>
  <v-row no-gutters
    ><v-col cols="12" sm="4">
      <h1>Bienvenido: {{ user.name }}</h1>
    </v-col>
    <v-col cols="12" sm="4">
      <v-img :src="require('../../assets/img/bienvenido.png')" contain />
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Bienvenido",
  computed: {
    ...mapState("currentUser", ["user"]),
  },
};
</script>
