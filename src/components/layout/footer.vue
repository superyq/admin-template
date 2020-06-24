<template lang="pug">
  footer.layout-footer
    p
      a(href='http://www.4399.com', target='_blank') 人生若只如初见
      | 2019 &copy; CHAINONE
</template>

<script>
export default {
  name: "layout-footer"
}
</script>

<style lang="scss">
.layout-footer {
  position: absolute;
  bottom: 0;
  left: 180px;
  right: 0;
  z-index: 1010;
  padding: 10px 20px;
  text-align: center;
  line-height: 1;

  p {
    margin: 10px 0;
  }

  a {
    padding: 0 5px 0;
  }
}
</style>