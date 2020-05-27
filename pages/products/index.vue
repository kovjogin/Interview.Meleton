<template>
  <div class="w-100">
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <product-item-list-sort-field
          v-model="paginate.sortField"
          class="mr-3"
        />
        <product-item-list-sort-direction v-model="paginate.sortDirection" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mx-auto d-flex justify-content-center">
          <product-item
            v-for="item in items"
            :key="item.id"
            v-bind="item"
            class="product-item"
          />
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <product-item-list-paginate
          class="justify-content-center"
          v-if="paginateComponent"
          v-bind="paginateComponent"
          @on-page-change="paginate.currentPage = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('products');
  import ProductItem from '../../components/ProductItem';
  import ProductItemListSortField from '../../components/ProductItemListSortField';
  import ProductItemListSortDirection from '../../components/ProductItemListSortDirection';
  import ProductItemListPaginate from '../../components/ProductItemListPaginate';

  export default {
    components: {
      ProductItemListPaginate,
      ProductItemListSortDirection,
      ProductItemListSortField,
      ProductItem
    },
    data() {
      return {
        items: [],
        paginateComponent: null,
        paginate: {
          sortDirection: 'desc',
          sortField: 'price',
          perPage: 2,
          currentPage: 1
        }
      };
    },

    watch: {
      paginate: {
        handler: function(currentValue) {
          this.items = this.getList(currentValue);
          this.paginateComponent = this.getPaginate(currentValue);
        },
        immediate: true,
        deep: true
      }
    },
    computed: {
      ...mapGetters(['getList', 'getPaginate'])
    }
  };
</script>

<style>
  .product-item + .product-item {
    margin-left: 15px;
  }
</style>
