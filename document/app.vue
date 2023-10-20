<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
    }
  };
</script>
