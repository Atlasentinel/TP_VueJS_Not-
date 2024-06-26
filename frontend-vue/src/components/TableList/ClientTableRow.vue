<template>
  <tr>
    <td class="align-middle">{{ clientName }}</td>
    <td class="align-middle">{{ client.companyName }}</td>
    <td class="align-middle">{{ client.date }}</td>

    <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
      <button @click="onDelete()" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash me-2"></i>Supprimer
      </button>
      <button @click="onEdit()" class="btn btn-outline-info">
        <i class="fa-solid fa-pen me-2"></i>Editer
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  emits: ['delete', 'edit'],
  computed: {
    clientName() {
      // Assurez-vous que le template string est correctement formé
      return this.client.firstName + " " + this.client.lastName;
    }
  },
  methods: {
    onDelete() {
      this.$emit('delete', this.client);
    },
    onEdit() {
      this.$emit('edit', this.client);
    }
  }
}
</script>

<style scoped></style>
