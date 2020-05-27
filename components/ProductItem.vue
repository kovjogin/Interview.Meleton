<template>
  <div class="card shadow-sm">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">
        <n-link :to="{ name: 'products-id', params: { id: id } }">
          {{ title }}
        </n-link>
      </h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">${{ price }}</h1>
      <ul class="list-unstyled mt-3 mb-0">
        <li>{{ created_at | dateLocal }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: [Number, String],
        required: true
      },

      title: {
        type: String,
        default: null
      },

      price: {
        type: Number,
        required: true
      },

      created_at: {
        type: String,
        required: true
      }
    }
  };
</script>
