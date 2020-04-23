<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-24">
        <v-card-title class="justify-center">
          <h1>Iniciar sesion</h1>
        </v-card-title>
        <v-img :src="require('../../assets/img/login.png')" />

        <v-container>
          <Alerta
            color="warning"
            type="error"
            icono="warning"
            :texto="message"
            v-if="message"
          />
        </v-container>

        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              label="Correo electrónico"
              name="login"
              prepend-icon="person"
              type="email"
              outlined
              color="primary"
              required
              :rules="emailRules"
              v-model="user.email"
            />
            <v-spacer></v-spacer>
            <v-text-field
              id="password"
              label="Contraseña"
              name="password"
              prepend-icon="lock"
              type="password"
              outlined
              color="primary"
              required
              v-model="user.password"
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            type="submit"
            @click="login"
            :disabled="!valid"
            block
            >Iniciar sesion</v-btn
          >
        </v-card-actions>

        <BotonDuda />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import BotonDuda from "../login/BotonDuda";
import Alerta from "../alerta/Alerta";
export default {
  name: "Login",
  components: {
    BotonDuda,
    Alerta,
  },
  data: () => ({
    valid: true,
    user: {
      email: "",
      password: "",
    },

    emailRules: [
      (v) => !!v || "Necesita ingresar un correo",
      (v) => /.+@.+\..+/.test(v) || "El correo debe ser valido",
    ],
  }),
  computed: {
    message: {
      get() {
        return this.$store.state.currentUser.loginMessage;
      },
    },
  },

  methods: {
    login() {
      this.$store.dispatch("currentUser/loginUser", this.user);
    },
  },
};
</script>
