<template>
  <div v-if="client">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 v-if="isNewClient" class="h3">
          <i class="fa-solid fa-angle-down me-2"></i>Créer un client
        </h1>
        <h1 v-else class="h3"><i class="fa-solid fa-angle-down me-2"></i>Éditer un client</h1>
      </div>
      <div v-if="!isNewClient" class="col text-end">
        <button @click="deleteClient(client)" class="btn btn-outline-danger">
          <i class="fa-solid fa-trash me-2"></i>Supprimer le client
        </button>
        <a href="/clients" class="btn btn-outline-info m-2">
          <i class="fa-solid fa-arrow-left fa-fade me-2"></i>Retour
        </a>
      </div>
    </div>

    <div class="row">
  <div class="col-md-12">
    <div>
      <h1>Contact: </h1>
      <div class="row">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input type="text" name="firstName" id="firstName" v-model="client.firstName" class="form-control" placeholder="Prénom" :class="{ 'is-invalid': !client.firstName }" />
            <label for="firstName" class="form-label">Prénom</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input type="text" name="lastName" id="lastName" v-model="client.lastName" class="form-control" placeholder="Nom" :class="{ 'is-invalid': !client.lastName }" />
            <label for="lastName" class="form-label">Nom</label>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input type="date" name="date" id="date" class="form-control" placeholder="Date" format="yyyy-MM-dd" v-model="client.date" :class="{ 'is-invalid': !client.date }" />
            <label for="date" class="form-label">Date d'ajout</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input type="text" name="fonction" id="fonction" v-model="client.fonction" class="form-control" placeholder="Fonction" :class="{ 'is-invalid': !client.fonction }" />
            <label for="fonction" class="form-label">Fonction</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input type="text" name="phone_number" id="phone_number" v-model="client.phone_number" class="form-control" placeholder="Numéro de téléphone" :class="{ 'is-invalid': !client.phone_number }" />
            <label for="phone_number" class="form-label">Numéro de téléphone</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input type="email" name="email" id="email" v-model="client.email" class="form-control" placeholder="Email" :class="{ 'is-invalid': !client.email }" />
            <label for="email" class="form-label">Email</label>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input type="text" name="companyName" id="companyName" v-model="client.companyName" class="form-control" placeholder="Entreprise" :class="{ 'is-invalid': !client.companyName }" />
            <label for="companyName" class="form-label">Entreprise</label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>Coordonnées: </h1>
      <div class="form-floating mb-3">
        <input type="text" name="adresse_1" id="adresse_1" v-model="client.adresse_1" class="form-control" placeholder="Adresse 1" :class="{ 'is-invalid': !client.adresse_1 }" />
        <label for="adresse_1" class="form-label">Adresse 1</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" name="adresse_2" id="adresse_2" v-model="client.adresse_2" class="form-control" placeholder="Adresse 2" :class="{ 'is-invalid': !client.adresse_2 }" />
        <label for="adresse_2" class="form-label">Adresse 2</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" name="code_postal" id="code_postal" v-model="client.code_postal" class="form-control" placeholder="Code Postal" :class="{ 'is-invalid': !client.code_postal }" />
        <label for="code_postal" class="form-label">Code Postal</label>
      </div>
      <div class="form-floating mb-3">
        <select name="country" id="country" class="form-control" v-model="client.country" :class="{ 'is-invalid': !client.country }">
          <option value="">Veuillez choisir un pays</option>
          <option v-for="country in countries" :value="country.country" :key="country.id">
            {{ country.country }}
          </option>
        </select>
        <label for="country" class="form-label">Pays</label>
      </div>
    </div>
  </div>
</div>



    <p class="text-end">
      <button @click="submitForm" :disabled="formInvalid" class="btn btn-outline-primary btn-lg px-5">
        <i class="fa-solid fa-save me-2"></i>Enregistrer
      </button>
    </p>
    <pre>{{ client }}</pre>
  </div>
</template>

<script>
import TableListClient from '@/components/TableList/TableListClient.vue'
import { clients } from '@/seeds/clients.js'
import { countries } from '@/seeds/countries.js'
import { useClientstore } from '@/stores/client.js'
import { mapActions, mapWritableState } from 'pinia'

export default {
  components: {
    // PrestationTableRow,
    TableListClient
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      countries,
    }
  },
  computed: {
    ...mapWritableState(useClientstore, ['client']),
    isNewClient() {
      return this.id == '-1';
    },
    formInvalid() {
      return !this.client.firstName || !this.client.lastName || !this.client.companyName || !this.client.date || !this.client.fonction || !this.client.country;
    }
  },
  mounted() {
    this.setClient(this.id);
  },
  methods: {
    ...mapActions(useClientstore, ['onDeleteClient', 'onUpdateClient', 'onCreateClient', 'setClient']),
    submitForm() {
      if (this.isNewClient) {
        this.onCreateClient(this.client);
      } else {
        this.onUpdateClient(this.client);
      }
      // Utilisez le nom de la route pour la navigation
      this.$router.push({ name: 'clients' });
    },
    deleteClient(client) {
      this.onDeleteClient(client);
      // Utilisez le nom de la route pour la navigation
      this.$router.push({ name: 'clients' });
    }
  }
}
</script>

<style scoped></style>
