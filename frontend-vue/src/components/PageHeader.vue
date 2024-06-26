<template>
  <header class="shadow">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" activeClass="" exactActiveClass="" to="/"
          >BILL APP</RouterLink
        >

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/"
              ><i class="fa-solid fa-house"></i> Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/bills"
              ><i class="fa-solid fa-receipt"></i> Bills</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/clients"
              ><i class="fa-solid fa-users-between-lines"></i> Clients</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// imort du composant de lien depuis vue-router
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped></style>
