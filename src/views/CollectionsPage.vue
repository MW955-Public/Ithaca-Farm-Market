<template>
  <div class="CollectionsPage">
    <CollectionsHeader name="Bill"/>
    <div id="achievementBadges">
      <Achievement style="float:left;" name="Power Shopper"/>
      <Achievement style="float:left;" name="Home-Grown"/>
      <Achievement style="float:left;" name="Hunter Gatherer"/>
    </div>

    <!-- <p>---------</p> -->


    <sui-button-group id="toggleButtons">
      <sui-button id="suiButton" fluid v-on:click='switchToCards'>Cards</sui-button>
      <sui-button class = "defaultButton" id="suiButton" fluid v-on:click='switchToRecipes'>Past Hunts</sui-button>
    </sui-button-group>

    <!-- <div class="btn-group">
      <button v-on:click='switchToCards'>Cards</button>
      <button v-on:click='switchToRecipes'>Recipes</button>
    </div> -->

  <!-- <toggle-switch
    :options="myOptions"
    @change="switchCardsAndRecipes()"
  /> -->

    <!-- <p>---------</p> -->
    <div id="CardContainer" v-show='this.showCards'>

      <div id="completed">
      <div id="header4">
        <h4>Active Cards</h4>
      </div>
      <!-- <div id="completedHuntsList"> -->
      <!-- <Card name="Peachy Farm" :stamp=1 />  -->
      <Card name="Evergreen Farm" :stamp=4 />
      <!-- </div> -->
      <div v-for="vendor in loops" :key="vendor">
        <Card :name="vendor.name" :stamp="vendor.stamp"></Card>
      </div>
      </div>

      
      <div id="header4">
        <h4> Featured <span></span> </h4>
      </div>
      <Card name="Watercrest" :stamp=3 />
      <Card name="Magnolia Ranch" :stamp=6 />
      <!-- <Card name="Jess's Flowers"/> -->

    </div>

    <div id="RecipeContainer" v-show='this.showRecipes'>
      <div id="header4">
        <h4>Food</h4>
      </div>
      <CompletedHunt name="Pesto & Goat Cheese Risotto"/>
      <CompletedHunt name="Ham Chowder"/>
      <div id="header4">
        <h4>DIY</h4>
      </div>
      <CompletedHunt name="Cozy Cheesy Mash"/>
      <CompletedHunt name="Ice Cream Mocha"/>
      <div id="header4">
        <h4>Product</h4>
      </div>
      <CompletedHunt name="Tropical Chic"/>
      <CompletedHunt name="Farmer Tan"/>
    </div>
    <!-- <p>---------</p> -->

    
  </div>
</template>

<script>
import CollectionsHeader from '@/components/CollectionsHeader.vue'

import Achievement from '@/components/Achievement.vue'

import Card from '@/components/Card.vue'

import CompletedHunt from '@/components/CompletedHunt.vue'

export default {
  name: 'CollectionsPage',
  components: {
    Achievement,
    Card,
    CompletedHunt,
    CollectionsHeader,
  },
  data: function(){
    return {
      showCards: true,
      showRecipes: false,
      loops: [],

    }
  },
  methods: {
    switchToCards (){
      if (this.showCards == false){
        this.showCards = true,
        this.showRecipes = false,
        window.console.log("switched to cards")
      }
      else{
        this.showCards = true,
        this.showRecipes = false,
        window.console.log("already on cards")
      }
    },
    switchToRecipes (){
      if (this.showRecipes == false){
        this.showCards = false,
        this.showRecipes = true,
        window.console.log("switched to recipes")
      }
      else{
        this.showCards = false,
        this.showRecipes = true,
        window.console.log("Already on recipes")
      }
    },
    loadCards(){
      var vendor;
      
      // window.console.log("localStorage: " + localStorage);
      for (vendor in localStorage){
        var tmp = localStorage.getItem(vendor);
        var trash = localStorage.getItem("loglevel:webpack-dev-server");
        // window.console.log(tmp);
        // window.console.log(typeof(tmp));
        if(tmp != null && tmp != trash){
          window.console.log("vendor: " + vendor);        

          var farmKey = vendor;
          // window.console.log("farmKey: "+ vendor);
          var farmObject = JSON.parse(tmp);
          // window.console.log(localStorage.getItem(farmKey))

          var farmCounter = farmObject["counter"];
          this.counter = farmCounter;
          // window.console.log("this.counter: "+ this.counter);
          // window.console.log("farmCounter: "+ farmCounter);

          var farmStamp = farmObject["stamp"]
          this.stamp = farmStamp;
          // window.console.log("stamp: "+ this.stamp);
          
          this.loops.push({name:farmKey, stamp:farmStamp});
          window.console.log(this.loops);
          // window.console.log("farmStamp: "+ farmStamp);
          // farmObject.stamp = this.stamp + 1;
          // window.console.log("updated farmObject:" + farmObject);

          // document.getElementById("completedHuntsList").innerHTML += "<Card name='" + vendor + "' stamp="+farmStamp+"/>";
        }
      }
    },
  },
  mounted: function(){
    // window.console.log("mounted");
    // localStorage.setItem("Ally's Farm" , "{"name":"Allys Farm","stamp":4,"counter":1}");
    // localStorage.setItem("Bobby's Farm" , "{"name":"Bobby%27s Farm","stamp":4,"counter":1}");
    this.loadCards();
    // localStorage.setItem("Ally's Farm", "{"name":"Allys Farm","stamp":4,"counter":1}")
  }
  
}
</script>

<style scoped>
  #completed {
    width: 100%;
    margin-bottom: 120px;
  }

  #achievementBadges {
    display: inline-block;
  }

  #cardContainer {
    display: block;
  }

  h4 {
    text-align: left;
    /* padding-top: 10px; */
  }

  #header4 {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 7px;
    border-bottom: 0.5px solid rgb(167, 167, 167);
    margin-right: 10px;
  }

  /* h4 span {
    flex: 1 1 auto;
    margin-left: 7%;
    margin-right: 8%;
    border-top: 1px solid rgb(70, 70, 70);
  } */

  #toggleButtons {
    width: 95%;
    /* margin-left: 10px !important;
    margin-right: 10px; */
    /* text-align: left !important; */
    float:left;
    margin-bottom: 15px;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top: 20px;
  }

  #suiButton{
    width: 50%;
  }
</style>