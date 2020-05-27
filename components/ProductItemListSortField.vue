<template>
  <div class="btn-group btn-group-sm">
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: isActive('price') }"
      @click="setActive('price')"
    >
      Price
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: isActive('created_at') }"
      @click="setActive('created_at')"
    >
      Date
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [String],
        required: true
      }
    },

    methods: {
      isActive: function(field) {
        return field === this.value;
      },

      setActive: function(field) {
        this.$emit('input', field);
      }
    }
  };
</script>
