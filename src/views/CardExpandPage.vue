<template>
  <div class="CardExpandPage">
    
    <img id="back" @click='back()' src='../images/back.png'/>
    <div id="cardContainer">
    <sui-card id = "punchcard">
      <sui-image :src="require('../images/Farms.jpg')"/>
      <sui-card-content>
        <!-- <sui-card-header>Congratulations!!</sui-card-header> -->
        <sui-card-header> Thank you for checking in at {{ $route.params.VendorID}}</sui-card-header>
        <sui-card-description>You have {{this.stamp}} stamp(s)</sui-card-description>
      </sui-card-content>
      <sui-card-content id="card">
        <Card :name='this.$route.params.VendorID' :stamp='this.stamp' :counter='this.counter'></Card>
      </sui-card-content>
    </sui-card>
    
      
  </div>
        

        
        
       
     
        

      
    </div>
  
</template>

<script>
import Card from '@/components/Card.vue'


export default {
  name: 'CardExpandPage',
  components: {
    Card,
  },
  mounted(){
    this.getFarms();

  },
  data: function () {
    return {
     
      name:"",
      stamp:"",
      counter:""
    }
  },
  methods:{
    getFarms(){
      this.counter=JSON.parse(localStorage.getItem(this.$route.params.VendorID)).counter;
      this.stamp=JSON.parse(localStorage.getItem(this.$route.params.VendorID)).stamp;
      this.name=this.$route.params.VendorID;
    },
    back () {
      window.history.go(-2)
    }
  }
  
}
</script>
<style scoped>
.CardExpandPage {
  overflow: hidden;
}

.Card {
  min-width: 150px;
  margin-left: 22%;
}

#cardContainer {
  margin-top: 100px;
  padding-bottom: 10px;
}

#punchcard {
  margin: auto;
}   

#back {
  width: 40px;
  left: 0;
  top: 0;
  position: fixed;
  /* opacity: 80%; */
  margin-left: 4%;
  margin-top: 5%;
  /* padding-bottom: 20%;*/
}
    
</style>
