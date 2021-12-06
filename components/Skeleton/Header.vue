<template>
  <header>
        <NuxtLink to="/"><div class="logo">elcarpios</div></NuxtLink>
        <nav>
          <ul>
            <li>
              <a href="https://www.instagram.com/realcarpios/" target="_blank">
                <img class="icon" src="~/assets/icons/instagram.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/victor-carpio-fern%C3%A1ndez-845b13107/" target="_blank">
                <img class="icon" src="~/assets/icons/linkedin.svg" />
              </a>
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
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-family: 'Carattere', cursive;
  }

  header .logo {
    color: white;
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

  header nav ul li .icon {
    vertical-align: middle;
    height: 26px;
    width: 26px;
  }
</style>