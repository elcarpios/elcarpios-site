<template>
  <header>
        <NuxtLink to="/"><div class="logo">elcarpios</div></NuxtLink>
        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-family: 'Carattere', cursive;
  }

  header .logo {
    color: #3DA5D9;
    font-size: 40px;
  }

  header nav {
    flex-grow: 1;
    font-size: 25px;
  }

  header nav ul {
    display: flex;
    justify-content: flex-end;
  }

  header nav ul li {
    margin-left: 15px;
  }
</style>