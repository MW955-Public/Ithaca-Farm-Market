<template>
  <div class="CompletedScanPage">
    <h1>This is a Completed Scan page, which Confirms that the user has successfully scanned the item with id: {{$route.params.ItemID}} from the vendor with id: {{$route.params.VendorID}}.</h1>
  </div>
</template>

<script>

export default {
  name: 'CompletedScanPage',
  components: {
  }
}
</script>
