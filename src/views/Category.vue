<template>
  <div class="category">
      <Categories></Categories>
      <!-- <Pagination/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Categories from '@/components/Categories.vue';
// import Pagination from '@/components/Paginations.vue';

@Component({
  components: {
    Categories,
    // Pagination,
  },
})
export default class Category extends Vue {}
</script>
