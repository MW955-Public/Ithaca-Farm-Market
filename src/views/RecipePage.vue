<template>

  <div class="RecipePage" id="RecipePage">

    <div v-for = "hunt in json" v-bind:key="hunt.id">
      <div v-if = "hunt.name === $route.params.RecipeID">
        <div class="header"> 
          <img @click='back()' src='../images/back.png'/>
          <div class="ui segment" v-bind:style="{backgroundImage: 'url('+ require('../images/hunts/' + hunt.image + '.jpg') +')', 
            backgroundSize: '100%'}"> 
            <p> {{hunt.type}} </p>
            {{ hunt.name }}       
          </div>
        </div>

        <h3> Items <span></span> </h3>
        <div v-for = "item in hunt.ingredients" v-bind:key = "item.id" id = "ingredients">
          <ItemPanel :quantity='item.quantity' :name='item.name' :image='item.image' :vendors='item.vendors.length'/>
        </div>

        <h3 id="instructions"> Instructions <span></span> </h3>
        <div v-for = "(instruction, index) in hunt.instructions" v-bind:key= "instruction.id">
          <ItemPanel :index='index+1' :instruction='instruction'/>
        </div>
      </div>
    </div>

    <div v-if = "this.completed === true">
    <button class="ui button" @click='incomplete()'> ✅ Completed Hunt </button>
    </div>

    <div v-if = "this.completed === false">
    <button class="ui button" @click='complete()'> ⬜️ Incomplete Hunt </button>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import ItemPanel from '@/components/ItemPanel.vue'
import hunts from '@/assets/hunts.json'
export default {
  name: 'RecipePage',
  components: {
    ItemPanel
  },
  mounted(){
    this.setCom();
    for(var i = 0; i < hunts.length; i++) {
      if(hunts[i].name == this.$route.params.RecipeID) {
        this.image = hunts[i].image
        this.type = hunts[i].type
      }
    }
  },

  data: function () {
    return {
      json: hunts,
      completed: false,
      image: '',
      type: '',
      openDefult: true,
    }
  },
  
  methods: {
    back () {
      window.history.back()
    },
    haveReci(){
      var recipe;
      for (recipe in localStorage){
      var temp = localStorage.getItem(recipe);
      //var trash = localStorage.getItem("loglevel:webpack-dev-server");
      // if (temp != "SILENT" && temp!= null) {
      // var name = temp.name;
      if(temp != "SILENT" && temp != null && JSON.parse(temp).flag==2 && JSON.parse(temp).name===this.$route.params.RecipeID){
      return true;
      }
      }
      return false;
      
      },
    setCom(){
      this.completed=this.haveReci();
      

    },
    
    
    complete () {
      this.completed = true;
      var jsonData={"name":this.$route.params.RecipeID, "flag":2, "counter":1, "image":this.image, "type":this.type};
      if(localStorage.getItem(this.$route.params.RecipeID)===null){
        
        var jsonDataString=JSON.stringify(jsonData);
           localStorage.setItem(this.$route.params.RecipeID, jsonDataString);
       

        
      }else{
        var reCounter=JSON.parse(localStorage.getItem(this.$route.params.RecipeID)).counter+1;
        jsonData.counter=reCounter;
        var jsonDataString=JSON.stringify(jsonData);
        localStorage.setItem(this.$route.params.RecipeID, jsonDataString);
        
      }
    },
    incomplete () {
      this.completed = false;
      if(localStorage.getItem(this.$route.params.RecipeID) != null) {
        localStorage.removeItem(this.$route.params.RecipeID)
      }
    },
    
  },
  
}
/* eslint-disable */
</script>
<style scoped>
.RecipePage {
  padding-top: 170px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 170px;
}
.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}
img {
  width: 40px;
  float: left;
  position: relative;
  /* opacity: 80%; */
  margin-left: 4%;
  margin-top: 5%;
  z-index: 1;
}
.ui.segment {
  text-align: right;
  padding: 150px 20px 15px 65px;
  font-size: 15pt;
  color: rgb(49, 49, 49);
  font-weight: 900;
  width: 100%;
  border-radius: 0px;
  margin-top: -20px;
}
p {
  font-size: 10pt;
  font-weight: bold;
  color: rgb(83, 157, 218);
  background-color: white;
  border-radius: 6px;
  padding: 3px 10px 3px 10px;
  float: right;
  margin-top: -35px;
}
#ingredients {
  width: 80%;
  margin: auto;
  background-color: burlywood;
  border-radius: 20px;
  margin-top: 10px;
  text-align: right;
}
h3 {
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 8%;
}
h3 span {
  flex: 1 1 auto;
  margin-left: 7%;
  margin-right: 8%;
  border-top: 1px solid rgb(70, 70, 70);
}
#instructions {
  margin-top: 40px;
  margin-bottom: 25px;
}
.ui.button {
  width: 100%;
  position: fixed;
  bottom: 0; 
  left: 0;
  z-index: 3;
  margin-bottom: 82px;
  border-radius: 0;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  font-size: 11pt;
}
</style>

