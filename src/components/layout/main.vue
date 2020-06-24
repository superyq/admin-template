<template lang="pug">
  main.layout-main
    keep-alive
      router-view
</template>

<script>
export default {
  name: 'layout-main',
}
</script>

<style lang="scss">
.layout-main {
  position: relative;
  min-width: 750px;
  min-height: 500px;
  margin: 20px;
  margin-bottom: 0;
  border-radius: 5px;
}
</style>