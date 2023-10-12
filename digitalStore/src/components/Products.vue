<template>
  <h1>Comming from components (Products.vue)</h1>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  async beforeMount() {
    const response = await this.getProducts;
    console.log(response);
  },
  computed: {
    ...mapGetters("product", ["getProducts"]),
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
  },
};
</script>
