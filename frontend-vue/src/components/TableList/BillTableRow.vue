<template>
  <tr>
    <td class="align-middle"><i class="fa-solid fa-receipt"></i> {{ bill.billnum }}</td>
    <td class="align-middle">{{ bill.date }}</td>
    <td class="align-middle">{{ bill.description }}</td>
    <td class="align-middle">{{ bill.client.firstName + " " + bill.client.lastName }}</td>
    <td class="align-middle text-end">{{ clientTotalHT }} HT</td>
    <td class="align-middle text-end">{{ clientTotalTTC }} TTC</td>
    <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
      <button @click="onDelete()" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash me-2" />Supprimer
      </button>
      <button @click="onEdit()" class="btn btn-outline-info">
        <i class="fa-solid fa-pen me-2" />Editer
      </button>
    </td>
  </tr>
</template>

<script>
import { clients } from '@/seeds/clients.js'
export default {
  props: {
    bill: {
      type: Object,
      required: true
    },
    clients
  },
  emits: ['delete', 'edit'],
  computed: {
    clientName() {
      return  bill.client.firstName + " " + bill.client.lastName ;
    },
    clientTotalHT()
    {
      return this.bill.totalHT.toFixed(2);
    },
    clientTotalTTC()
    {
      return this.bill.totalTTC.toFixed(2);
    },
  },
  data() {
    return {
      clients
    }
  },
  methods: {
    onDelete() {
      this.$emit('delete', this.bill)
    },
    onEdit() {
      this.$emit('edit', this.bill)
    }
  }
}
</script>

<style scoped></style>
