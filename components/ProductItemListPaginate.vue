<template>
  <ul class="pagination mb-0">
    <li class="page-item" :class="{ disabled: currentPage - 1 <= 0 }">
      <a
        class="page-link"
        href="javascript:void(0)"
        @click="setPage(currentPage - 1)"
        >Previous</a
      >
    </li>
    <li
      v-for="i in totalPages"
      class="page-item"
      :key="`page-${i}`"
      :class="{ disabled: i === currentPage }"
    >
      <a class="page-link" href="javascript:void(0)" @click="setPage(i)">
        {{ i }}
      </a>
    </li>
    <li class="page-item" :class="{ disabled: currentPage + 1 > totalPages }">
      <a class="page-link" href="javascript:void(0)" @click="setPage(currentPage + 1)">Next</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: [String, Number],
        required: true
      },
      perPage: {
        type: [String, Number],
        default: 10
      },

      totalPages: {
        type: [String, Number],
        required: true
      }
    },

    methods: {
      setPage: function(value) {
        this.$emit('on-page-change', value);
      }
    }
  };
</script>
