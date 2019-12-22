<template>

  <div class="ScanPage">
  
  <img @click='back()' src='../images/back.png'/>
  <div>
  <h1>Scan</h1>
  <p> Scan vendor codes when you buy items for cute stamps and rewards! </p>
  </div>
    
  <Scanner></Scanner>
    
  </div>
</template>

<script>
import Scanner from '@/components/Scanner.vue'



export default {
  name: 'ScanPage',
  components: {
  Scanner
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style scoped>
img {
  width: 40px;
  position: fixed;
  left: 0;
  top: 0;
  /* opacity: 80%; */
  margin-left: 4%;
  margin-top: 5%;
}

h1 {
  text-align: left;
  margin-left: 10%;
  margin-top: 25%;
}

p{
  text-align: left;
  font-size: 12pt;
  margin-left: 10%;
  margin-right: 10%
}
</style>