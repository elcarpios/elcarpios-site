<template>
  <div class="app">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from 'components/Skeleton/Header.vue';
import Footer from 'components/Skeleton/Footer.vue';

export default {
  components: { Header, Footer },
  methods: {
    trackPageview() {
      this.$gtag.pageview({
        page_title: document.title,
        page_path: document.location.pathname
      });
    }
  },
  mounted() {
    this.trackPageview();
  }
};
</script>

<style scoped>
  .app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    padding: 0 15px;
  }
</style>