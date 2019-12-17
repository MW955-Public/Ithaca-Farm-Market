<template>
  <div class="ItemPanel">
    <router-link v-if='!instruction' id="recipe" :to="{path: '/VendorsPage/' + name}">
      <div id="ingredient-row" class="ui right aligned one column grid">
        <div class="row">
          <div> <img class="ui tiny circular image" :src="require('../images/ingredients/' + image )"/> </div>
          <!-- <h4> {{vendors}} vendors available </h4> -->
            <h3> {{quantity}} {{name}} <br/> <h4> {{vendors}} vendors available →</h4> </h3> 
            <!-- <h4> {{vendors}} vendors available </h4> -->
        </div>
      </div>
    </router-link>

    <div v-if='instruction' id="instructions" class="ui left aligned one column grid">
      <div id="instruction-row" class="middle aligned content row">
        <h3> <div id="index"> {{index}} </div> {{instruction}} </h3>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ItemPanel',
  props: {
    quantity: String,
    name: String,
    image: String,
    vendors: Number,
    index: Number,
    instruction: String
  },
  mounted () {
    // console.log("instruction: " + this.instruction)
    // console.log("image: " + this.image)
    console.log(document.referrer)
  }
}
/* eslint-disable */
</script>

<style scoped>
  img {
    margin-left: 20%;
  }
  .ui.tiny.circular.image {
    margin-right: 20%;
  }
  #ingredient-row {
    background-color: rgb(248, 235, 210);
    border-radius: 10px;
    margin-top: 20px;
  }
  #ingredient-row h3 {
    float: right;
    text-align: right;
    width: 55%;
    padding-right: 3%;
    margin-left: 15%;
    margin-top: 20px;
    color: rgb(59, 59, 59);
  }
  #ingredient-row h4 {
    margin: 0;
    color: rgb(84, 141, 196);
  }
  #instruction-row h3 {
    text-align: left;
    float: left;
    width: 90%;
    font-size: 13pt;
    font-weight: lighter;
    color: rgb(44, 44, 44);
  }
  #index {
    float: left;
    background-color: white;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    margin-right: 30px;
    text-align: left;
    margin-left: 11%;
    margin-bottom: 2%;
    font-weight: 900;
  }

</style>
