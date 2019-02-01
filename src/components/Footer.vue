<template>
  <footer class="py-4">
    <p>LinkEnt is a lightweight <a href="https://linktr.ee/">Linktree</a> alternative, built with Bootstrap 4 and Vue.js for Github Pages.</p>
    <p>Consider the <a href="">source</a> and clone from the "new-leaf" branch to start fresh.</p>
    <p class="mb-4">If you find this useful,<br class="d-block d-md-none"> feel free to buy me a coffee <i class="fa fa-coffee"></i></p>
    <DonateButton/>
  </footer>
</template>

<script>
import DonateButton from './DonateButton'

export default {
  components: {
    DonateButton
  }
}
</script>
