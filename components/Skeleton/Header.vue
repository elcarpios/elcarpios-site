<template>
  <header>
    <nav>
      <ul>
        <li>
          <ExternalLink href="https://www.instagram.com/elcarpios/">
            <img class="icon" src="~/assets/icons/instagram.svg" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.linkedin.com/in/victor-carpio-fern%C3%A1ndez-845b13107/">
            <img class="icon" src="~/assets/icons/linkedin.svg" />
          </ExternalLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ExternalLink from 'components/Basic/ExternalLink.vue';

export default {
  components: { ExternalLink }
}
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px;

    nav {
      flex-grow: 1;
      font-size: 25px;

      ul {
        display: flex;
        justify-content: flex-end;

        li {
          margin-left: 15px;

          .icon {
            vertical-align: middle;
            height: 26px;
            width: 26px;
          }
        }
      }
    }
  }
</style>