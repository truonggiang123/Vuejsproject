<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perpage"
      aria-controls="my-table"
      @change="onPageChange($event)"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perpage: 10,
    };
  },
  props: {
    items: Array,
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    onPageChange(pageNumber) {
      this.$emit('change', pageNumber);
    }
  },
};
</script>
