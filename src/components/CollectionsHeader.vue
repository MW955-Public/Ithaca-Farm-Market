<template>
  <div class="CollectionsHeader">
    <h1>Hi {{ name }}</h1>
    <table>
      <tr>
        <td id="td1">
          <img class="icon" src="../assets/badges/icon1.png" alt="icon">
        </td>
        <td>
          Level {{level}} in {{vendorName}}
        </td>
      </tr>
      <tr>
        <td id="td1">
          <img class="icon" src="../assets/badges/icon2.png" alt="icon2">
        </td>
        <td>
          Completed {{counter}} punch cards in total
        </td>
      </tr>
      <tr>
        <td id="td1">
          <img class="icon" src="../assets/badges/icon3.png" alt="icon">
        </td>
        <td>
          Tomato lover
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CollectionsHeader',
    data: function(){
    return {
      
      counter: Number,
      vendorName:String,
      level:0,
      

    }
  },
    props: {
      name: String,
      
      
    },
    
    methods:{
      loadInfo(){
        var vendor;
        var maxCard=0;
        var everyCount=0;
        var venName ="";
        
       // window.console.log("localStorage: " + localStorage);
      for (vendor in localStorage){
        var tmp = localStorage.getItem(vendor);
        var trash = localStorage.getItem("loglevel:webpack-dev-server");
        
        // window.console.log(tmp);
        // window.console.log(typeof(tmp));
        if(tmp != null && tmp != trash && JSON.parse(tmp).name!=""){
          //window.console.log("farmKey: "+ vendor);
          var farmObject = JSON.parse(tmp);
          // window.console.log(localStorage.getItem(farmKey))

          var farmCounter = farmObject["counter"];
          window.console.log(maxCard);
          if( farmCounter > maxCard){
            maxCard=farmCounter;
            venName=farmObject.name;
            
          }
          everyCount = everyCount+farmCounter;
          // window.console.log("this.counter: "+ this.counter);
          // window.console.log("farmCounter: "+ farmCounter);

          
          

        }
      }
      this.counter=everyCount;
      this.vendorName=venName;
      this.level=maxCard;
        


      }

    },
    mounted: function(){
      this.loadInfo();
    }
    
  }
</script>

<style scoped>
  .CollectionsHeader {
    text-align: left;
  }
  h1 {
    padding-top: 30px;
    border-bottom: 0.5px solid lightgrey;
    padding-left: 12px;
    margin-left: 12px;
    margin-right:12px;
  }
  p {
    margin-top: -5px;
  }
  .icon{
    height:15px;
  }
  .CollectionsHeader div img{
    float: left;
    padding-right: 3px;
    padding-left: 12px;
  }
  #td1 {
    margin-right: -50px;
    width: 5%;
  }

  table {
    margin-left: 12px;
  }

</style>
