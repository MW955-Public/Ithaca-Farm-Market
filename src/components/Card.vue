<template>
  <router-link class="Card" :to="{path: '/CardExpandPage/' +  encodeApostrophe(name)}">
    <h1>
    <!-- <h1 :onclick="'window.location.replace(\'/CardExpandPage/' + encodeApostrophe(name) + '\')'"> -->
    {{ name }}
    </h1>
    <div class="counters">{{counter}}</div>
    
    <div v-if="stamp==1" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punchMargin" id="punch2"></div>
        <div class="punchMargin" id="punch3"></div>
        <div class="punchMargin" id="punch4"></div>
        <div class="punchMargin" id="punch5"></div>
        <div class="punchMargin" id="punch6"></div>
      </div>
    </div>

    <div v-if="stamp==2" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punch" id="punch2"></div>
        <div class="punchMargin" id="punch3"></div>
        <div class="punchMargin" id="punch4"></div>
        <div class="punchMargin" id="punch5"></div>
        <div class="punchMargin" id="punch6"></div>
      </div>
    </div>

    <div v-if="stamp==3" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punch" id="punch2"></div>
        <div class="punch" id="punch3"></div>
        <div class="punchMargin" id="punch4"></div>
        <div class="punchMargin" id="punch5"></div>
        <div class="punchMargin" id="punch6"></div>
      </div>
    </div>

    <div v-if="stamp==4" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punch" id="punch2"></div>
        <div class="punch" id="punch3"></div>
        <div class="punch" id="punch4"></div>
        <div class="punchMargin" id="punch5"></div>
        <div class="punchMargin" id="punch6"></div>
      </div>
    </div>

    <div v-if="stamp==5" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punch" id="punch2"></div>
        <div class="punch" id="punch3"></div>
        <div class="punch" id="punch4"></div>
        <div class="punch" id="punch5"></div>
        <div class="punchMargin" id="punch6"></div>
      </div>
    </div>

    <div v-if="stamp==6" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
        <div class="punch" id="punch2"></div>
        <div class="punch" id="punch3"></div>
        <div class="punch" id="punch4"></div>
        <div class="punch" id="punch5"></div>
        <div class="punch" id="punch6"></div>
      </div>
    </div>

    <!-- <div v-if="stamp==1" id="punchDisplay">
      <div id="sixRack">
        <div class="punch" id="punch1"></div>
      </div>
    </div> -->

  </router-link>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      name: String,
      counter: 0,

      stamp: Number,
      farmKey: String,
      farmObject: Object,
      farmCounter: Number,
      farmStamp: Number,

    },
    methods: {
      encodeApostrophe (name){
        name = name.replace(/'/g, '%27');
        return name;
      },
      showCounters(counters){
        if (counters===0){
          return false;
        }else{
          return true;
        }
      }
    }
    //   howManyPunches (punches){
    //     document.getElementById("punch1").style.display = "none";
    //     document.getElementById("punch2").style.display = "none";
    //     document.getElementById("punch3").style.display = "none";
    //     document.getElementById("punch4").style.display = "none";
    //     document.getElementById("punch5").style.display = "none";
    //     document.getElementById("punch6").style.display = "none";
        
    //     if (punches == 0){
    //       window.console.log("no punches")
    //     }
    //     else if (punches == 1){
    //       document.getElementById("punch1").style.display = "block";
    //       window.console.log("1 punch")
    //     }
    //     else if (punches == 2){
    //       document.getElementById("punch1").style.display = "block";
    //       document.getElementById("punch2").style.display = "block";
    //       window.console.log("2 punches")
    //     }
    //     else if (punches == 3){
    //       document.getElementById("punch1").style.display = "block";
    //       document.getElementById("punch2").style.display = "block";
    //       document.getElementById("punch3").style.display = "block";
    //       window.console.log("3 punches")
    //     }
    //     else if (punches == 4){
    //       document.getElementById("punch1").style.display = "block";
    //       document.getElementById("punch2").style.display = "block";
    //       document.getElementById("punch3").style.display = "block";
    //       document.getElementById("punch4").style.display = "block";
    //       window.console.log("4 punches")
    //     }
    //     else if (punches == 5){
    //       document.getElementById("punch1").style.display = "block";
    //       document.getElementById("punch2").style.display = "block";
    //       document.getElementById("punch3").style.display = "block";
    //       document.getElementById("punch4").style.display = "block";
    //       document.getElementById("punch5").style.display = "block";
    //       window.console.log("5 punches")
    //     }
    //     else if (punches == 6){
    //       document.getElementById("punch1").style.display = "block";
    //       document.getElementById("punch2").style.display = "block";
    //       document.getElementById("punch3").style.display = "block";
    //       document.getElementById("punch4").style.display = "block";
    //       document.getElementById("punch5").style.display = "block";
    //       document.getElementById("punch6").style.display = "block";
    //       window.console.log("6 punches")
    //     }
    //     else if (punches > 6) {
    //       window.console.log("ERROR: why are there more than 6 punches?")
    //     }
        
    //   },
    //   getFarms(){
    //     // window.console.log("localStorageName: " + this.localStorage.getItem(this.name)[name]);



    //     // window.console.log("name: "+ name);

    //     // var farmKey = this.name;
    //     // window.console.log("farmKey: "+ farmKey);
    //     // var farmObject = JSON.parse(localStorage.getItem(farmKey));
    //     // window.console.log(localStorage.getItem(farmKey))

    //     // var farmCounter = farmObject["counter"];
    //     // this.counter = farmCounter;
    //     // window.console.log("this.counter: "+ this.counter);
    //     // window.console.log("farmCounter: "+ farmCounter);

    //     // var farmStamp = farmObject["stamp"]
    //     // this.stamp = farmStamp;
    //     // window.console.log("stamp: "+ this.stamp);
    //     // // window.console.log("farmStamp: "+ farmStamp);
    //     // // farmObject.stamp = this.stamp + 1;
    //     // // window.console.log("updated farmObject:" + farmObject);
    //     this.howManyPunches(this.stamp);
    //   }
    // },
    // mounted: function(){

    //   this.getFarms(name);
    // }
  }
</script>

<style scoped>
  .Card {
    /* border-style: solid; */
    border-radius: 10px;
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    float: left;
    height: 100px;
    background-color: #faeace;
    margin-bottom: 10px;
    min-width: 144px;
  }
  h3 {
    margin: 40px 0 0;
  }
  a {
    color: rgb(34, 34, 34);
  }
  h1 {
    width: 60%;
    float: left;
    text-align: left;
    padding: 12px;
    font-size: 18px;
    font-weight: 600;
  }
  #punchDisplay {
    width: 40%;
    height: 100%;
    /* border: 1px solid black; */
    float:right;
    vertical-align: center;
    text-align: center;
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
  .punch{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
    float: left;
    margin: 2px;
    background-color: #5b5c75;
  }
  .punchMargin{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    
    border: 1px solid rgb(95, 95, 95);
    float: left;
    margin: 2px;
    
  }

  #sixRack {
    /* border: 1px solid black; */
    height: 50px;
    margin-top: 30px;
    width: 50%;
    max-width: 50px;
    display: inline-block;
  }

  #punch1 {
    display: block;
  }
</style>
