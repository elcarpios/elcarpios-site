<template>
  <div class="content">
    <div class="intro">
      <nav>
      </nav>
      <div class="image">
        <img src="~/assets/images/me.png" />
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

<style>
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .content h1 {
      margin-top: 15px;
  }

  .content .intro {
    height: 250px;
    width: 100%;
    border-top: 1px solid black;
    display: flex;
  }

  .content .intro {
    background-color: #262626;
  }

  .content .intro nav {
    flex-grow: 1;
  }

  .content .intro .image {
    height: 250px;
    width: 230px;
  }

  .content .intro .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
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
</style>