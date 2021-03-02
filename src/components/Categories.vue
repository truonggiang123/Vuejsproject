<template>
  <div>
    <!-- pop-up-add-category -->
    <div variant="info" class="btn-add">
      <b-button v-b-modal.modal-lg variant="info">
        <b-icon class="icon" icon="plus-circle-fill"></b-icon> Add
      </b-button>
      <!-- addCategory modal -->
      <b-modal id="modal-lg" size="lg" title="Add Category" @ok="addCategory">
        <div>
          <b-form-group
            label="Name:"
            label-for="input-formatter"
            class="mb-0 input-modal"
          >
            <b-form-input
              id="input-formatter"
              v-model="category.name"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Description:"
            label-for="input-lazy"
            class="mb-0 input-modal"
          >
            <b-form-input
              id="input-lazy"
              v-model="category.description"
              placeholder="Enter Description"
            ></b-form-input>
          </b-form-group>
        </div>
      </b-modal>
      <!-- end-addCategory-modal -->
    </div>
    <!-- end-pop-ip-add-category -->
    <b-table small
      :items="categories"
      :fields="fields"
      :per-page= 10
      :current-page="currentPage"
      id="my-table"
    >
       <!-- v-slot:cell(actions) = "{ item }" -> get value in row -->
       <!-- use: item.name, item.description -->
      <template v-slot:cell(actions) = "{ item }">
        <b-button @click ="showModalUpdateCategory(item)"  variant="info">
              <b-icon class="icon" icon="pencil-fill"></b-icon> Update
        </b-button>
        <b-button @click ="showModalDeleteCategory(item)" class="btn" variant="danger">
              <b-icon class="icon" icon="trash-fill"></b-icon>
              Delete
        </b-button>
      </template>
    </b-table>
    <!-- updateCategory modal -->
      <b-modal id="modalUpdateCateogry"  size="lg" title="Add Category"
       @ok="updateCategory(item._id)">
        <div>
          <b-form-group
            label="Name:"
            label-for="input-formatter"
            class="mb-0 input-modal"
          >
            <b-form-input
              id="input-formatter"
              v-model="item.name"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Description:"
            label-for="input-lazy"
            class="mb-0 input-modal"
          >
            <b-form-input
              id="input-lazy"
              v-model="item.description"
              placeholder="Enter Description"
            ></b-form-input>
          </b-form-group>
        </div>
      </b-modal>
      <!-- end-updateCategory-modal -->
      <!-- delete-category-modal -->
      <b-modal id="modalDeleteCategory" @ok ="deleteCategory(id)">
        Are you sure you want to delete?
      </b-modal>
      <!-- end-delete-category-modal -->
    <div class="pagination">
      <Pagination
      ref="pagination"
      :items= categories
      @change="onPageinationnChange($event)"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Paginations.vue';
@Component({
  components: {
    Pagination,
  },
})
export default class Categories extends Vue {
  category = {};

  currentPage = 0;

  item ={}

  id =''

  fields = ['name', 'description', { key: 'actions', label: 'Actions' }]

  get categories() {
    return this.$store.state.categories;
  }

  mounted() {
    this.$store.dispatch('getAllCategory');
  }

  addCategory() {
    this.$store.dispatch('addCategory', {
      category: this.category,
      callback: (status: any) => {
        if (status === 'success') {
          this.makeToastS('success', 'Complete add category', 'Successfully!');
        } else {
          this.makeToastS('danger', 'Fail add category', 'Fails');
        }
      },
    });
  }

  clearItem() {
    this.item = {};
  }

  // update category
  showModalUpdateCategory(item: any) {
    this.item = JSON.parse(JSON.stringify(item));
    this.$bvModal.show('modalUpdateCateogry');
  }

  updateCategory(id: any) {
    this.$store.dispatch('updateCategory', {
      category: this.item,
      id,
      callback: (status: any) => {
        if (status === 'success') {
          this.makeToastS('success', 'Complete add category', 'Successfully!');
        } else {
          this.makeToastS('danger', 'Fail add category', 'Fails!');
        }
      },
    });
  }

  // delete category
  showModalDeleteCategory(item: any) {
    this.id = item._id;
    this.$bvModal.show('modalDeleteCategory');
  }

  deleteCategory(id: any) {
    this.$store.dispatch('deleteCategory', {
      id,
      callback: (status: any) => {
        if (status === 'success') {
          this.makeToastS('success', 'Complete delete category', 'Successfully!');
        } else {
          this.makeToastS('danger', 'Fail delete category', 'Fails!');
        }
      },
    });
  }

  makeToastS(variant: any, actions: any, status: any) {
    this.$bvToast.toast(actions, {
      title: status,
      variant,
      solid: true,
    });
  }

  onPageinationnChange(pageNumber: any) {
    this.currentPage = pageNumber;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  padding: 3px 9px;
  font-size: 15px;
  margin: 7px;
}
td,
th {
  vertical-align: middle;
}
.icon {
  width: 18px;
  margin-right: 3px;
}
tr td:last-child {
  text-align: center;
}
tr th:last-child {
  text-align: center;
}
.btn-add {
  margin-bottom: 15px;
}
.input-modal {
  padding: 10px;
}
.pagination{
  justify-content: center;
}
</style>
