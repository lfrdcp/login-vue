<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <Dashboard />
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import Dashboard from "../dashboard/Dashboard";

export default {
  name: "PaginaInicio",
  components: {
    Dashboard,
  },

  created() {
    this.$store.dispatch("currentUser/getUser");
  },
};
</script>
