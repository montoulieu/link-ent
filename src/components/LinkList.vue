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
        // {
        //   title: 'Pieter Montoulieu', /* Button Label */
        //   url: 'https://montoulieu.dev' /* Button Url */
        // },
        {
          title: 'Take Me By The Hand',
          url: 'https://youtu.be/6E5m_XtCX3c'
        }
      ]
    }
  }
}
</script>
