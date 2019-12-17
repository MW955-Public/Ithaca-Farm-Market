<template>
  <div class="VendorPanel">
      <div class="ui left aligned one column grid">
        <div class="row">
          <img class="ui tiny circular image" :src="require('../images/ingredients/' + image )"/>
          <h3> {{name}} </h3>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'vendorPanel',
  props: {
    name: String,
    image: String,
  }
}
</script>

<style scoped>
  img {
    margin-left: 10%;
    height: 100px;
  }
  .ui.tiny.circular.image {
    margin-right: 10%;
    height: 80px;
  }
  .row {
    background-color: rgb(248, 235, 210);
    border-radius: 10px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 25px;
  }
  .row h3 {
    text-align: right;
    float: right;
  }
</style>