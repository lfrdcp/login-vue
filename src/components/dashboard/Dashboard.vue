<template>
  <v-card>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>perm_identity</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Perfil: {{ user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/dashboard" link>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/inventory" link>
          <v-list-item-action>
            <v-icon>storefront</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inventario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>power_settings_new </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      drawer: null,
    };
  },

  computed: {
    ...mapState("currentUser", ["user"]),
  },

  methods: {
    logout() {
      this.$store.dispatch("currentUser/logoutUser");
    },
  },
};
</script>
