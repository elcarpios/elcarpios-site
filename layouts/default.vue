<template>
  <div class="app">
    <header>
        <div class="logo">elcarpios</div>
        <nav></nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <div><i>This my personal site, enjoy it</i></div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  header .logo {
    color: #3DA5D9;
    font-family: 'Carattere', cursive;
    font-size: 40px;
  }

  main {
    flex-grow: 1;
    padding: 0 15px;
  }

  footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3DA5D9;
  }
</style>