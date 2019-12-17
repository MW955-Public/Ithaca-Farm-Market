<template>
  <div id="app">
    <div id="view-container">
      <router-view/>
    </div>
    <div id="nav">
      <router-link id="hunts" to="/"> 
      <img src="./images/navigation/hunts.png"/> 
      <p> Hunts </p>
      </router-link>
      <router-link id="collections" to="/CollectionsPage"> <img src="./images/navigation/collections.png"/> <p> Collections </p> </router-link>
    </div>  
  </div> 
</template>

<style>
  :root {
    --high_contrast_lighter: #c9c7db; /* Light Blue; For clickable elements */
    --low_contrast_lighter: #cacd8e; /* Light Green; For decor */
    --main_color: #f1bbbb; /* Earthtone; For Backgrounds */
    --low_contrast_darker: #87924a; /* Dark Green; For decor */
    --high_contrast_darker: #5b5c75; /* Dark Blue; For clicked elements */
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #view-container {
    min-height: 100%;
    position: relative;
    /* background-color: var(--main_color);
    border-radius: 20px;
    margin: 1vh;
    height: 85vh; */
  }

  #nav {
    /* border-radius: 20px; */
    overflow: hidden;
    font-size: 30px;
    /* margin: 0vh 1vh 0vh 1vh; */
    /* height: 10vh;
    line-height: 9vh; */
    /* background-color: var(--low_contrast_darker); */
    padding-top: 20px;
    padding-bottom: 20px; 
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;
    align-content: center;
    justify-content: center;
  }

  #nav a {
    font-size: 12pt;
    font-weight: bolder;
    color: var(--high_contrast_darker);
  }

  #nav .router-link-exact-active {
    background-color: rgb(252, 244, 215);
    border-radius: 50px;
  }

  #nav img {
    width: 20px;
    height: 20px;
    margin-right: 10%;
    /* opacity: 70%; */
  }

  #hunts {
    display: flex;
    flex-direction: row;
    margin-right: 5%;
    padding: 10px 25px 10px 20px;
  }

  #collections {
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 20px;
  }
</style>
