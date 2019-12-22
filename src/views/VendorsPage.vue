<template>

  <div class="VendorsPage">
    <img id="back" @click='back()' src='../images/back.png'/>
    <div v-for = "hunts in json1" v-bind:key="hunts.id">
      <div v-for = "item in hunts.ingredients" v-bind:key = "item.id">
        <div  v-if = "item.name === $route.params.ItemID">
          <div id = "layout">
          <img class="ui circular image" :src="require('../images/ingredients/' + item.image )"/>
          <div id = "layout1">
          <h1>{{$route.params.ItemID}}</h1>
  
          <router-link id="button" :to="{path: '/ScanPage/'+$route.params.ItemID}"> 
            <button class="ui button"> <img id="qr-code" src="../images/qrcode-icon.png"/> <p> Scan Vendor </p> </button>
          </router-link> 
          </div>
          </div>
          <h3> Available Vendors <span></span> </h3>
          <div v-for = "vendor_name in item.vendors " v-bind:key = "vendor_name.id"> 
             <div v-for = "element in json " v-bind:key = "element.id">
               <vendorPanel :image='element[vendor_name].photo' :name='vendor_name' />
              </div>
          </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import hunts from '@/assets/hunts.json'
import vendors from '@/assets/vendors.json'
import vendorPanel from '@/components/vendorPanel.vue'
// import ItemPanel from '@/components/ItemPanel.vue'



export default {
  name: 'VendorsPage',
  components: {
    
  vendorPanel,
  },
   methods:{
    ToScan(){
      this.$router.replace('/VendorsPage/Scanner.vue');
    },
    back () {
      window.history.back()
    }
  },
  data: function () {
    return {
      json: vendors,
      json1: hunts
    }
  },

}
</script>

<style scoped>
.VendorsPage {
  overflow: hidden;
}
#back {
  width: 40px;
  float: left;
  position: relative;
  /* opacity: 80%; */
  margin-left: 4%;
  margin-top: 5%;
  z-index: 1;
}
#button {
  float: left;
}
#qr-code {
  width: 20px;
  display: flex;
}
p {
  display: flex;
  padding-left: 8px;
}
#layout{
  display:flex;
  flex-direction: row;
  margin: auto;
  /* padding-top: 8%;
  padding-right: 15%;
  padding-left: 0; */
  justify-content: space-evenly;
  margin-top: 10%;
  width: 90%;
}
#layout1{
  display:flex;
  flex-direction: column;
  float: right;
  margin-left: 5%;
}
#layout h1 {
  margin-top: 5%;
  font-size: 20pt;
  text-align: left;
} 
.ui.button {
  /* margin-top: 10%;
  margin-right: 45%; */
  float: left;
  border-radius: 50px;
  background-color: rgb(112, 176, 230);
  color: white;
  font-weight: 900;
  flex-direction: row;
  display: flex;
}
#button:hover {
  color: pink;
}
.ui.circular.image {
  width: 100px;
  /* display: flex; */
  /* margin-left: -10%; */
}
h3 {
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 10%;
  margin-bottom: 10%;
}
h3 span {
  flex: 1 1 auto;
  margin-left: 5%;
  margin-right: 10%;
  border-top: 1px solid rgb(70, 70, 70);
}
#item_name{
  margin: 0;
  text-align: right;
}
</style>
