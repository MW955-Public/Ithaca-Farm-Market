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

        <h3> Ingredients <span></span> </h3>
        <div v-for = "item in hunt.ingredients" v-bind:key = "item.id" id = "ingredients">
          <ItemPanel :quantity='item.quantity' :name='item.name' :image='item.image' :vendors='item.vendors.length'/>
        </div>

        <h3 id="instructions"> Instructions <span></span> </h3>
        <div v-for = "(instruction, index) in hunt.instructions" v-bind:key= "instruction.id">
          <ItemPanel :index='index+1' :instruction='instruction'/>
        </div>

      </div>
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

  data: function () {
    return {
      json: hunts
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
/* eslint-disable */
</script>
<style scoped>
.RecipePage {
  padding-top: 170px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 130px;
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
</style>

