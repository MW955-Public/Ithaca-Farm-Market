<template>
  <!-- <div class="CompletedHunt" :onclick="'window.location.replace(\'/RecipePage/' + encodeApostrophe(name) + '\')'">
    <h1 :onclick="'window.location.replace(\'/RecipePage/' + encodeApostrophe(name) + '\')'">
    {{ name }}
    </h1>
  </div> -->
  

  <router-link class="CompletedHunt" :to="{path: '/RecipePage/' + encodeApostrophe(name)}" 
  v-bind:style="{backgroundImage: 'url('+ require('../images/hunts/' + image + '.jpg') +')', backgroundSize: '100%'}">
    <h1> {{ name }} </h1>
    <!-- <div class="counters">{{counter}}</div>  -->
  </router-link>
  
</template>

<script>
  export default {
    name: 'CompletedHunt',
    props: {
      name: String,
      image: String,
      counter: 0,
    },
     methods: {
      encodeApostrophe (name){
        name = name.replace(/'/g, '%27');
        return name;
      }
    }
  }
</script>

<style scoped>
  .CompletedHunt {
    /* border-style: solid; */
    border-radius: 10px;
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    float: left;
    height: 100px;
    /* background-color: #c9c7db; */
    margin-bottom: 10px;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #272727;
  }
  h1 {
    width: 100%;
    float: left;
    text-align: left;
    padding: 12px;
    font-size: 18px;
    font-weight: 600;
    /* margin-top: 30%; */
  }
  .counters{
    width: 20px;
    height: 20px;
    border-radius: 70%;
    font-weight: bold;
    color: rgb(68, 68, 68);
    float: right;
    margin: -3px;
    background-color: #ffffff;
  }
</style>
