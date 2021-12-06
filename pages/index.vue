<template>
  <div class="content">
    <div class="intro">
      <div class="welcome">
      </div>
      <div class="hero">
        <NuxtLink class="hero-link" to="/"><div class="text">elcarpios</div></NuxtLink>
        <div class="image">
          <img src="~/assets/images/me.png" />
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="upcoming-projects">
        <h2 class="title">Upcoming projects:</h2>
      </div>
      <div class="ended-projects">
        <h2 class="title">Ended projects:</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    .intro {
      height: 250px;
      width: 100%;
      border-top: 1px solid black;
      display: flex;
      justify-content: flex-end;
      background-color: #262626;
      font-family: 'Carattere', cursive;
      color: white;

      .welcome {
        flex-grow: 1;
      }

      .hero {
        display: flex;

        .hero-link {
          align-self: center;
          margin: 30px 5px 0 0;

          .text {
            font-size: 40px;
          }
        } 
      }

      .image {
        height: 250px;
        width: 230px;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .projects > * {
    padding: 15px;
    min-height: 150px;
  }

  .projects .title {
    font-family: 'Cookie';
    font-weight: 100;
    font-size: 28px;
    color: #262626;
  }

  @media (min-width: 750px) {}
</style>