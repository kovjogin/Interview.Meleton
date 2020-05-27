<template>
  <product-item-show :id="$route.params.id" :item="item" />
</template>

<script>
  import ProductItemShow from '../../../components/ProductItemShow';
  export default {
    components: { ProductItemShow },
    asyncData({ params, error, store }) {
      const currentItem = store['getters']['products/getItem'](params.id);
      if (currentItem) {
        return {
          item: currentItem
        };
      } else {
        error({ statusCode: 404 });
      }
    }
  };
</script>
