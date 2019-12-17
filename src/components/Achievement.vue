<template>
  <div class="Achievement">
    <!-- <h1>Achievement: {{ name }}</h1> -->
    <!-- some method to use name to pull .PNG files so we can make different ones for each-->
    <img class="Badge" src="../assets/badges/badge1.png" alt="BadgeIcon">
    <p id="badgeTitle">{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Achievement',
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .Achievement {
    /* border-style: solid; */
    width: 100px;
  }
  .Badge {
    width: 50px;
    height: 50px;
  }
  #badgeTitle{
    font-size: 8px;
    font-weight: bold;
    margin-top: -5px;
  }
  .Badge {
    width: 50px;
    height: 50px;
  }
  #badgeTitle{
    font-size: 8px;
    font-weight: bold;
    margin-top: -10px;
  }
</style>
