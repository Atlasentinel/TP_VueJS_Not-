<template>
  <div>
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2"></i>Liste des clients</h1>
      </div>
      <div class="col text-end">
        <router-link to="/edit-client/-1" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>Ajouter un client
        </router-link>
      </div>
    </div>

    <TableListClient>
      <ClientTableRow
        v-for="client in clients"
        :key="client.id"
        :client="client"
        @edit="onEditClient"
        @delete="onDeleteClient"
      />
    </TableListClient>
  </div>
</template>

<script>
import ClientTableRow from '@/components/TableList/ClientTableRow.vue'
import TableListClient from '@/components/TableList/TableListClient.vue'
import { useClientstore } from '@/stores/client.js'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    TableListClient,
    ClientTableRow
  },
  computed: {
    ...mapState(useClientstore, ['clients'])
  },
  async mounted() {
    await this.getAllClients();
  },
  methods: {
    ...mapActions(useClientstore, ['onDeleteClient', 'getAllClients']),
    onEditClient(client) {
      console.log('edit client with id: ', client.id);
      this.$router.push({
        name: 'edit-client',
        params: {
          id: client.id
        }
      });
    }
  }
}
</script>

<style scoped></style>
