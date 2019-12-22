<template>

  <div class="Scanner">
    
    <div>
    <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->

    
    <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
    
  </div>
</template>


<script>
//import VendorStamps from '../GlobalVarable.js';
import collections from '@/assets/Collection.json'

// import { callbackify } from 'util';



  //var jsonArray=[];

  export default {
    name: 'Scanner',
    data () {
    return {
      json: collections,
      result: '',
      
    }
    
  },
  
  

  props:{

  },
    mounted() {
      this.onDecode();
      this.console.log(localStorage);

  },
    methods: {

      
   
         //创建json对象
      onDecode (result) {    
           //window.console.log(result);


      this.result = result;

      result = result.replace(/\n/g, '')
      this.result = result;
      let VendorId = result;
      
      
       this.$router.replace("/CardExpandPage/"+VendorId);
       this.save();

      //  for(collections in this.json){
      //   //this.console.log(this.result);
      //   if(collections.name === this.result){
      //     localStorage.setItem("Vendors", collections.stamps)
          
      //     if(collections.stamps>6){
      //       collections.stamps=0;
      //       collections.counter++;
      //     }
          

      //   }
      //   var collectionString = JSON.stringify(collections);
      //   var fs =require('fs');
      //   fs.writeFile('Collection.json', collectionString, 'utf8', err => {err})
        // on page load
      //   var coordinates = [];

      //  // in the event function
      //  coordinates.push(e.latlng);

      //  function setJSON(key, value) {
      //  window.localStorage.setItem(key, JSON.stringify(value));
      //  }
      // function getJSON(key) {
      // return JSON.parse(window.localStorage.getItem(key));
      // }
      // setJSON(result, getJSON(result)+1 );
        //var jsonData={"vendor":"","stamp":0,"counter":0};
      //设置修改json对象的值
    //   VendorStamps.jsonData.vendor=this.result;
    //   VendorStamps.jsonData.stamp=VendorStamps.jsonData.stamp+1;
    //  if(VendorStamps.jsonData.stamp>6){
    //    VendorStamps.jsonData.counter=VendorStamps.jsonData.counter+1;
    //    VendorStamps.jsonData.stamp=0;
    // }
    // window.console.log("vendor: "+ VendorStamps.jsonData.vendor);
    
    //  //把json对象添加到数组末尾
    //   VendorStamps.jsonArray.push(VendorStamps.jsonData);
    //   //window.console.log(jsonArray);
    //   JSON.stringify(VendorStamps.jsonArray);
    //    //转化数组为字符串格式
    //  var jsonArrayString=JSON.stringify(VendorStamps.jsonArray.Vendors);
    //   VendorStamps.jsonArray.num=VendorStamps.jsonArray.num+1;
    //  //用localStorage存储数组到本地浏览器数据
    // localStorage.setItem("localData",jsonArrayString);
    // //得到localstorage中的数据
    //   var getLocalData = localStorage.getItem('localData');
    //   JSON.parse(getLocalData);
    //  //将字符串格式转化回来
    //   //window.console.log(JSON.parse(getLocalData));
    // //  window.console.log("stamp: "+ VendorStamps.jsonArray.Vendors[0].stamp);
    // //  window.console.log("stamp: "+ VendorStamps.jsonArray.Vendors[0].stamp);


    
       },
       save(){
         //创建json对象
         var jsonData={"name":"","stamp":1,"counter":1};
         var tryJson=JSON.parse(localStorage.getItem(this.result));
         if(tryJson===null){
           jsonData.name=this.result;
           var jsonDataString=JSON.stringify(jsonData);
           localStorage.setItem(this.result, jsonDataString);
         }
         else{
           var temp_stamp=JSON.parse(localStorage.getItem(this.result)).stamp+1;
           var termp_counter=JSON.parse(localStorage.getItem(this.result)).counter;
           if(temp_stamp===7){
             temp_stamp=1;
             termp_counter=termp_counter+1;
             }
            jsonData.name=this.result;
            jsonData.stamp=temp_stamp;
            jsonData.counter=termp_counter;
            jsonDataString=JSON.stringify(jsonData);
            localStorage.setItem(this.result,jsonDataString);

         }
       
         
         //修改json对象的值

         


       
      
  },
      async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    },
    
        

     
  }
  }
  

 
    
  
  
</script>

<style scoped>
  .Scanner {
    /* border-style: solid;
    border-width: 1px; */
    margin: 40px 40px 40px 40px;

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
    color: #42b983;
  }
</style>
