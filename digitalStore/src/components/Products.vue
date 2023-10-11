<template>
  <h1>Comming from components (Products.vue)</h1>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    // ...mapActions("product_module", ["fetchProducts"]),
    ...mapActions(["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts;
  },
};
</script>
