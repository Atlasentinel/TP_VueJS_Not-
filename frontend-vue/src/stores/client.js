  import { clients } from '@/seeds/clients.js'
  import { defineStore } from 'pinia'
  // on a installé la librairie uuid avec npm i uuid afin de pouvoir l'utiliser ici
  export const useClientstore = defineStore('client', {
    state: () => ({
      clients,
      client: null
    }),
    getters: {},
    actions: {
      // récupère les données depuis l'API : fonction asynchrone
      async getAllClients() {
        const response = await this.$http.get('/clients')
        this.clients = response.data
      },

      // récupère une client dans le store client au moment de l'édition
      async setClient(id) {
        // si l'id est égal à -1, cela veut dire que l'on veut créer une nouvelle facture, donc on ne récupère pas de facture dans le store client
        if (id == '-1') {
          this.client = {
            id: -1,
            firstName: '',
            lastName: '',
            companyName: '',
            date: ''
          }
        } else {
          // si je modifie un client, je fais un appel à l'API pour récupérer les données :
          const response = await this.$http.get('/clients/' + id)
          this.client = response.data
        }
      },
      // recherche du client correspondant dans le store, et enregistre les modifications
      async onUpdateClient(client) {
        const response = await this.$http.patch('/clients/' + client.id, client)
        console.log(response.data)
        // je vidange la donnée d'édition d'un client
        this.client = null
        await this.getAllClients()
      },

      // Créer un nouveau client
      async onCreateClient(client) {
        // j'ajoute un nouveau client dans le tableau des clients, en ajoutant au passage un id unique grâce à la méthode importée uuidv4() depuis le package uuid
        const response = await this.$http.post('/clients', client)
        console.log(response.data)
        this.client = null
        await this.getAllClients()
      },

      async onDeleteClient(client) {
        // on recherche l'index du client à supprimer, et on retourne un nouveau tableau de clients sans celle-ci
        const response = await this.$http.delete('/clients/' + client.id)
        console.log(response.data)
        // pour raffraichir la liste des clients, je relance la méthode getAllClients()
        await this.getAllClients()
      }
    }
  })
