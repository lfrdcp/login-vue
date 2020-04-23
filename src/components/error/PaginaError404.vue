<template>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed to="/inicio">Regresar</v-btn>
      </div>
    </v-col>
    <v-col cols="12" sm="8" md="4">
      <v-img :src="require('../../assets/img/404.png')" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "PaginaError404",
};
</script>
