<template>

  <div class="ScanPage">

    <h1>Check In at: {{ $route.params.ItemID }}.</h1>
    
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
 
  
}
</script>
