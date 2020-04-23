<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <Login />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import Login from "../login/Login";

export default {
  name: "PaginaLogin",
  components: {
    Login,
  },
};
</script>
