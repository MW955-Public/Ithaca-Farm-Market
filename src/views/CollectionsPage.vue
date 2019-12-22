<template>
  <div class="CollectionsPage">
    <CollectionsHeader name="Lee"/>
    <div id="achievementBadges">
      <Achievement style="float:left;" name="Power Shopper"/>
      <Achievement style="float:left;" name="Home-Grown"/>
      <Achievement style="float:left;" name="Hunter Gatherer"/>
    </div>

    <!-- <p>---------</p> -->


    <sui-button-group id="toggleButtons">
      <sui-button class="cards" id="suiButton" fluid v-on:click='switchToCards'>Cards</sui-button>
      <sui-button id="suiButton" fluid v-on:click='switchToRecipes'>Past Hunts</sui-button>
    </sui-button-group>

    <!-- <div class="btn-group">
      <button v-on:click='switchToCards'>Cards</button>
      <button v-on:click='switchToRecipes'>Recipes</button>
    </div> -->

  <!-- <toggle-switch
    :options="myOptions"
    @change="switchCardsAndRecipes()"
  /> -->

    <div id="CardContainer" v-show='this.showCards'>

      <div id="completed">
      <div id="header4">
        <h3>Active Cards</h3>
        <span></span>
      </div>
      <div id="completedHuntsList">
        <!-- <div v-if='cardFlag'>
      <Card name="Peachy Farm" :stamp=5 :counter=2 />
      <Card name="Paradise Falls" :stamp=3 :counter=1 />
        </div> -->
      </div>
      <div v-for="vendor in loops" v-bind:key="vendor.name">
        <Card :name="vendor.name" :stamp="vendor.stamp" :counter="vendor.counter"></Card>
      </div>
      </div>
      <div id="header4">
        <h3> Featured </h3>
        <span></span>
      </div>
      <Card name="Watercrest" :stamp=3 counter="1"/>
      <Card name="Magnolia Ranch" :stamp=6 counter="2"/>

    </div>

    <div id="RecipeContainer" v-show='this.showRecipes'>
      <div id="header4">
        <h3>Recipe</h3>
        <span></span>
      </div>
      <!-- <CompletedHunt name="Pesto & Goat Cheese Risotto" image="pesto-goat-cheese-risotto"/>
      <CompletedHunt name="Potato Soup" image="potato-soup"/> -->
      <div v-for="hunts in huntsloop1" v-bind:key="hunts.name">
        <CompletedHunt :name="hunts.name" :image="hunts.image" :counter="hunts.counter"></CompletedHunt>
      </div>
      <div id="header4">
        <h3>DIY</h3>
        <span></span>
      </div>
      <!-- <CompletedHunt name="Cozy Cheesy Mash" image="cozy-cheese-mash"/>
      <CompletedHunt name="Ice Cream Mocha" image="ice-cream-mocha"/>  -->
      <div v-for="hunts in huntsloop2" v-bind:key="hunts.name">
        <CompletedHunt :name="hunts.name" :image="hunts.image" :counter="hunts.counter"></CompletedHunt>
      </div>
      <div id="header4">
        <h3>Product</h3>
        <span></span>
      </div>
      <!-- <CompletedHunt name="Tropical Chic" image="tropical-chic"/>
      <CompletedHunt name="Farmer Tan" image="farmer-tan"/> -->
      <div v-for="hunts in huntsloop3" v-bind:key="hunts.name">
       <CompletedHunt :name="hunts.name" :image="hunts.image" :counter="hunts.counter"></CompletedHunt>
      </div>
    </div>

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
      huntsloop1: [],
      huntsloop2: [],
      huntsloop3: [],
      counter: Number,
      cardFlag: true,


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
    // test(){
    //    this.huntsloop1.push({name:"Pesto & Goat Cheese Risotto", image:"pesto-goat-cheese-risotto", counter:1, type:1});

    // },
    loadHunts(){

       //this.huntsloop1.push({name:"Pesto & Goat Cheese Risotto", image:"pesto-goat-cheese-risotto", counter:1, type:1});
       this.huntsloop1.push({name:"Potato Soup", image:"potato-soup", counter:1, type:"recipe"});
       //this.huntsloop2.push({name:"Cozy Cheesy Mash", image:"cozy-cheese-mash", counter:1, type:2});
       this.huntsloop2.push({name:"Ice Cream Mocha", image:"ice-cream-mocha", counter:1, type:"diy"});
       //this.huntsloop3.push({name:"Tropical Chic", image:"tropical-chic", counter:1, type:3});
       this.huntsloop3.push({name:"TFarmer Tan", image:"farmer-tan", counter:1, type:"product"});
       var hunts;
       this.huntsFlag=false;
       for(hunts in localStorage){
         var tmp = localStorage.getItem(hunts);
         //window.console.log(JSON.parse(tmp));
         var trash = localStorage.getItem("loglevel:webpack-dev-server");


       if(tmp != trash && JSON.parse(tmp).flag==2 && JSON.parse(tmp).name!=""){
         window.console.log(JSON.parse(tmp));
         var huntsKey= hunts;
         //var huntsObject = JSON.parse(tmp);
         window.console.log(JSON.parse(tmp));
         //var huntsName = huntsObject.name;
         var huntsCount =JSON.parse(tmp).counter;
         var huntsImage= JSON.parse(tmp).image;
         var huntsType = JSON.parse(tmp).type;
         //this.name=huntsKey;
         this.counter=huntsCount;
         this.image=huntsImage;
         this.type=huntsType;
         //window.console.log(155555);
         //window.console.log(huntsType);
         if (huntsType=='recipe'){
           this.huntsloop1.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});

         }
         if (huntsType=='diy'){
           this.huntsloop2.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});

         }
         if (huntsType=='product'){
           this.huntsloop3.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});

         }

         //var loopType;
         //if(JSON.parse(tmp).name=="Potato Soup"||JSON.parse(tmp).name=="Ice Cream Mocha"||JSON.parse(tmp).name=="TFarmer Tan"){

           //huntsCount= huntsCount+1;
           //var defaultHunts;
          //  var temp;
          //  switch(huntsType){
          //    case huntsType==1 :  {
          //      for(temp in this.huntsloop1){
          //      if(huntsName==temp.name){
          //        temp.counter++;
          //       }
          //      }
          //    }
          //    break;
          //    case huntsType==2 : {
          //      for(temp in this.huntsloop2){
          //      if(huntsName==temp.name){
          //        temp.counter++;
          //       }
          //      }
          //    }
          //    break;
          //    case huntsType==3 : {
          //      for(temp in this.huntsloop3){
          //      if(huntsName==temp.name){
          //        temp.counter++;
          //       }
          //      }
          //    }
          //    break;
          //  }
        //  }else{

          //  switch(huntsType){
          //    case huntsType=='recipe':{
          //      window.console.log(huntsType);
          //      this.huntsloop1.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});
          //      }
          //      break;
          //    case huntsType=='diy':{
          //      window.console.log(huntsType);
          //      this.huntsloop2.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});
          //      }
          //      break;
          //    case huntsType=='product':{
          //      this.huntsloop3.push({name:huntsKey, image:huntsImage, counter:huntsCount, type:huntsType});
          //      }
          //      break;
          //  }


         //this.loops.push({name:farmKey, stamp:farmStamp, counter:farmCounter});
       }
       }
     },
    loadCards(){
      var vendor;
       this.cardFlag=false;

      // window.console.log("localStorage: " + localStorage);
      for (vendor in localStorage){
        var tmp = localStorage.getItem(vendor);
        var trash = localStorage.getItem("loglevel:webpack-dev-server");
        // window.console.log(tmp);
        // window.console.log(typeof(tmp));
        if(tmp != null && tmp != trash && JSON.parse(tmp).flag!=1 && JSON.parse(tmp).flag!=2 && JSON.parse(tmp).name!=""){
          //window.console.log("vendor: " + vendor);

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

          this.loops.push({name:farmKey, stamp:farmStamp, counter:farmCounter});

          //window.console.log(this.loops);
          // window.console.log("farmStamp: "+ farmStamp);
          // farmObject.stamp = this.stamp + 1;
          // window.console.log("updated farmObject:" + farmObject);

          // document.getElementById("completedHuntsList").innerHTML += "<Card name='" + vendor + "' stamp="+farmStamp+"/>";
          // hard code some vendors info


        }
      }
    },
  },
  mounted: function(){
    // window.console.log("mounted");
    // localStorage.setItem("Ally's Farm" , "{"name":"Allys Farm","stamp":4,"counter":1}");
    // localStorage.setItem("Bobby's Farm" , "{"name":"Bobby%27s Farm","stamp":4,"counter":1}");

    // localStorage.setItem("Ally's Farm", "{"name":"Allys Farm","stamp":4,"counter":1}")

    if(localStorage.getItem("Paradise Falls")=== null){
      window.console.log(1222222);
      localStorage.setItem("Paradise Falls", JSON.stringify({"name":"Paradise Falls","stamp":3,"counter":1}));
      localStorage.setItem("Peachy Farm", JSON.stringify({"name":"Peachy Farm","stamp":5,"counter":2}));

    }

    localStorage.setItem("Watercrest", JSON.stringify({"name":"Watercrest","stamp":3,"counter":1,"flag":1}));
    localStorage.setItem("Magnolia Ranch", JSON.stringify({"name":"Magnolia Ranch","stamp":6,"counter":2, "flag":1}));
    this.loadCards();
    this.loadHunts();
    this.test();

  }

}
</script>

<style scoped>
  .CollectionsPage {
    overflow: hidden;
    padding-bottom: 100px;
  }

  #completed {
    width: 100%;

  }

  #achievementBadges {
    display: inline-block;
  }

  #cardContainer {
    display: block;
  }

  h3 {
    text-align: left;
    /* padding-top: 10px; */
    display: flex;
    margin-left: 2%;
  }

  span {
    display: flex;
    flex: 1 1 auto;
    border-top: 1px solid rgb(82, 82, 82);
    margin-left: 5%;
    margin-right: 8%;
    margin-top: 3%;
  }

  #header4 {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 7px;
    /* border-bottom: 0.5px solid rgb(167, 167, 167); */
    margin-right: 10px;
    width: 100%;
    float: left;
    position: relative;
    display: flex;
    flex: 1 1 auto;
  }

  /* h4 span {
    flex: 1 1 auto;
    margin-left: 7%;
    margin-right: 8%;
    border-top: 1px solid rgb(70, 70, 70);
  } */

  #toggleButtons {
    width: 100%;
    /* margin-left: 10px !important;
    margin-right: 10px; */
    /* text-align: left !important; */
    border-radius: 0;
    float: left;
    margin-bottom: 15px;
    /* margin-left:2.5%; */
    margin-right:2.5%;
    margin-top: 20px;
  }

  #suiButton{
    width: 50%;
    border-radius: 0;
    font-size: 12pt;
  }

  .cards {
    border-right: 2px solid rgb(255, 250, 236);
  }
</style>