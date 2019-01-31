<template>
  <div id="app" class="text-white">
    <div class="container">
      <Header/>
      <LinkList/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import LinkList from './components/LinkList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    LinkList,
    Footer
  },
  data () {
    return {
      test: 'testing'
    }
  }
}
</script>
