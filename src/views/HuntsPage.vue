<template>
  <div class="HuntsPage">
    <div class = "vert">
      <div class="weather">
        <img v-if='this.icon' :src="'//openweathermap.org/img/wn/' + this.icon + '.png'"/>
        <h2>{{Math.round(convert(weather))}}° <br/> <p>Ithaca</p> </h2>
      </div>
      <p>@ 545 3rd St <br/>
      <b>weekends 10am-2pm </b> </p>
    </div>
    <div class = "vert">
      <HuntPanel type="recipe" name="Pesto & Goat Cheese Risotto" image="pesto-goat-cheese-risotto"/>
      <HuntPanel type="diy" name="Cozy Cheesy Mash" image="cozy-cheese-mash"/>
      <HuntPanel type="product" name="Tropical Chic" image="tropical-chic"/>
    </div>
  </div>
</template>

<script>
import HuntPanel from '@/components/HuntPanel.vue'
    /* eslint-disable */

export default {
  name: 'HuntsPage',
  
  components: {
    HuntPanel
  },
  data: function () {
    return {
      weather: {},
      icon: ''
    }
  },
  mounted () {
    const axios = require('axios')
    var cors_api_url = 'https://cors-anywhere.herokuapp.com/'
    var api_url = 'https://api.openweathermap.org/data/2.5/weather?id=5122432&APPID=62c7be159ea559df7cc45aaab31b41dd'
      axios
        .get(cors_api_url + api_url)
        .then(response => {
          this.weather = response.data.main.temp
          this.icon = response.data.weather[0].icon
        })
  },
  methods: {
    convert(kelvin) {
      var fahrenheit
      fahrenheit = ((kelvin-273.15)*1.8)+32
      return fahrenheit
    }
  }
}
    /* eslint-disable */

</script>

<style scoped>
@media only screen and (max-height: 700px) {
  .HuntsPage {
    padding-bottom: 550px;
  }
}
  p {
    float: right;
    text-align: right;
    padding-right: 10%;
    padding-top: 45px;
    font-size: 10pt;

  }
  .weather {
    float: left;
    text-align: right;
    padding-left: 8%;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .weather img {
    padding-top: 20px;
  }
  .weather h2 {
    float:right;
  }
  .weather p {
    margin: 0;
    padding: 0;
  }
  .vert {
    height: 15vh;
  }
</style>
