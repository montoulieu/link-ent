<template>
  <ul class="list-inline mb-0">
    <li v-for="account in socialAccounts" :key="account.id" class="list-inline-item">
      <a :href="account.url" target="_blank">
        <i :class="['fa fa-2x', 'fa-' + account.company]"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      socialAccounts: [
        {
          company: 'github',
          url: 'https://github.com/pi-mont'
        },
        {
          company: 'twitter',
          url: 'https://twitter.com/p13t3rm'
        },
        {
          company: 'instagram',
          url: 'https://instagram.com/pi.mont'
        }
      ]
    }
  }
}
</script>

<style>

</style>
