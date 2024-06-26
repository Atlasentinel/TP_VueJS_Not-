<template>
  <main class="container">
    <h1>Home</h1>
    <!-- Section pour les boutons alignés sur la même ligne -->
    <div class="row mb-3">
      <div class="col text-start">
        <router-link to="/edit-bill/-1" class="btn btn-outline-primary me-2">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter une facture
        </router-link>
        <router-link to="/edit-client/-1" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter un client
        </router-link>
      </div>
    </div>
    <!-- Section pour les vues scrollables -->
    <div class="row mb-3">
      <div class="col-md-6">
        <div class="border p-3 overflow-auto" style="height: 550px;">
          <ClientView></ClientView>
        </div>
      </div>
      <div class="col-md-6">
        <div class="border p-3 overflow-auto" style="height: 550px;">
          <DashboardView></DashboardView>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="border p-3 overflow-auto" style="height: 300px;">
          <BillView></BillView>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import { useCounterStore } from '@/stores/counter.js'
import ClientView from '@/views/ClientsView.vue'
import BillView from '@/views/BillsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { mapActions, mapState } from 'pinia'

console.log(useCounterStore)
export default {
  components: {
    // PrestationTableRow,
    ClientView,
    BillView,
    DashboardView
  },
  data() {
    return {
      toto: 'test'
    }
  },
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>
