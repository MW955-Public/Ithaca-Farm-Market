
<template lang="html">
  <div id="HuntPanel">
    <div id="hunt" class="ui center aligned one column grid">
      <div class="row">
        <router-link id="hunt" :to="{path: '/RecipePage/' + name}">
          <div class="ui segment" v-bind:style="{backgroundImage: 'url('+ require('../images/hunts/' + image + '.jpg') +')', 
          backgroundSize: '100%'}"> 
            <p> {{type}} </p>
            {{ name }}       
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'HuntPanel',
    props: {
      type: String,
      name: String,
      image: String
    },
    /* eslint-disable */
    mounted () {
      // document.getElementById('component').style.backgroundImage = 'url('+this.image+')'
      console.log(this.image)
    }
    /* eslint-disable */
  }
</script>

<style scoped>
/* #HuntPanel{
    display:flex;
    margin-top:10px;
    align-items: center;
    justify-content: center;
    
  } */
  #button{
    width:5;
    margin-right: 12em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  #hunt {
    width: 90%;
    margin: auto;
  }
  .ui.segment {
    text-align: right;
    padding: 100px 20px 15px 65px;
    font-size: 14pt;
    color: rgb(49, 49, 49);
    font-weight: 900;
    width: 100%;
    border-radius: 10px;
    border: none;
    box-shadow: none;
  }
  .ui.segment p {
    font-size: 10pt;
    font-weight: bold;
    color: rgb(83, 157, 218);
    float: left;
    margin-top: -90px;
    margin-left: -50px;
    background-color: white;
    border-radius: 6px;
    padding: 3px 10px 3px 10px;
  }
</style>
