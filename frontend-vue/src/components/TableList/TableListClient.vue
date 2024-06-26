<template>
  <table class="table">
    <thead>
      <tr>
        <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
        <slot name="thead">
          <th><i class="fa-regular fa-user"></i> Client</th>
          <th><i class="fa-regular fa-building"></i> Entreprise</th>
          <th><i class="fa-solid fa-calendar-days"></i> Date</th>
          <th class="text-end">Action</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <!-- affichage des lignes de tableau -->
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {}
</script>

<style scoped></style>
