<template>
  <form @submit.prevent="save">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required v-model="form.title" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Price</label>
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
          required
          min="0"
          v-model.number="form.price"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Date</label>
      <div class="col-sm-10">
        <input
          type="date"
          class="form-control"
          required
          v-model="form.created_at"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapActions } = createNamespacedHelpers('products');

  export default {
    props: {
      id: {
        type: [String, Number]
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

    methods: {
      ...mapActions(['createItem', 'editItem']),

      save: async function () {
        this.id
          ? await this.editItem({ id: this.id, form: this.form })
          : await this.createItem(this.form);

        this.$router.push({ name: 'products' });
      }
    }
  };
</script>
