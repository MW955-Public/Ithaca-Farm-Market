<template>
  <div class="CollectionsHeader">
    <h1>Hi {{ name }}</h1>
    <table>
      <tr>
        <td id="td1">
          <img class="icon" src="../assets/badges/icon1.png" alt="icon">
        </td>
        <td>
          Level 4 in Ally's Farm
        </td>
      </tr>
      <tr>
        <td id="td1">
          <img class="icon" src="../assets/badges/icon2.png" alt="icon2">
        </td>
        <td>
          Completed 23 punch cards in total
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
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .CollectionsHeader {
    text-align: left;
  }
  h1 {
    padding-top: 47px;
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
