<template>
  <div id="app">
    <Header />
    <router-view class="my-3"/>
<!--    <Footer />-->
  </div>
</template>

<script>
  import Header from '@/layouts/Header'
  import Footer from '@/layouts/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
