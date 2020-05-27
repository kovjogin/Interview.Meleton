<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        {{ form.title }}
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Price</label>
      <div class="col-sm-10">${{ form.price }}</div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Date</label>
      <div class="col-sm-10">
        {{ form.created_at | dateLocal }}
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" @click="edit">
          Edit
        </button>

        <button
          v-if="isAllowDelete"
          type="button"
          class="btn btn-danger"
          @click="remove()"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapActions } = createNamespacedHelpers('products');

  export default {
    props: {
      id: {
        type: [String, Number],
        required: true
      },
      item: {
        type: Object,
        default: () => ({})
      }
    },

    data() {
      return {
        form: {}
      };
    },

    watch: {
      item: {
        handler: function (currentValue) {
          // Диструктуризируем, чтобы не затрагивать store,
          // при необходимости можно установить значения по-умолчанию
          const { title, price, created_at } = currentValue || {};
          this.form = {
            title,
            price,
            created_at
          };
        },
        deep: true,
        immediate: true
      }
    },

    computed: {
      isAllowDelete: function () {
        return this.id;
      }
    },

    methods: {
      ...mapActions(['removeItem']),

      edit: function () {
        this.$router.push({
          name: 'products-id-edit',
          params: this.id
        });
      },

      remove: async function () {
        await this.removeItem(this.id);
        this.$router.push({ name: 'products' });
      }
    }
  };
</script>
