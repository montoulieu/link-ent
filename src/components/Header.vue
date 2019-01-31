<template>
  <header class="pb-4">
    <img class="profile-pic rounded-circle img-fluid mb-4" src="../assets/fry.png">
    <SocialLinks v-if="enableSocial"/>
  </header>
</template>

<script>
import SocialLinks from './SocialLinks'

export default {
  components: {
    SocialLinks
  },
  data () {
    return {
      enableSocial: true
    }
  }
}
</script>
