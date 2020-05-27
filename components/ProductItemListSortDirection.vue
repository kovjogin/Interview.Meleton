<template>
  <div class="btn-group btn-group-sm">
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: isActive('asc') }"
      @click="setActive('asc')"
    >
      ASC
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: isActive('desc') }"
      @click="setActive('desc')"
    >
      DESC
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
