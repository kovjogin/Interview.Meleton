<template>
  <product-form :id="$route.params.id" :item="item" />
</template>

<script>
  import ProductForm from '../../../components/ProductForm';
  export default {
    components: { ProductForm },
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
