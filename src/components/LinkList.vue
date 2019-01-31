<template>
  <div class="link-list">
    <a v-for="link in links" :key="link.id" :href="link.url" class="btn btn-link d-block" target="_blank">{{link.title}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Dev Resume & Portfolio',
          url: 'https://pi-mont.github.io/resume/'
        },
        {
          title: 'Pixel Glitch Blog',
          url: 'https://pixelglitch.net/'
        },
        {
          title: 'Chiptune Metal',
          url: 'http://music.drzilog.com/'
        },
        {
          title: 'Psychedlic Rock',
          url: 'https://shwarma.bandcamp.com/'
        },
        {
          title: 'Misc. Music',
          url: 'https://pixelglitch.bandcamp.com/'
        }
      ]
    }
  }
}
</script>
