<template>
  <div>
    <v-alert :type="tipo" :color="color" :icon="icono" border="top" prominent>
      {{ texto }}
    </v-alert>
  </div>
</template>
<script>
export default {
  name: "Alerta",
  props: ["color", "texto", "icono", "tipo"],
};
</script>
