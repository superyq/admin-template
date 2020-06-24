<template lang="pug">
  svg(:class='className', :style='{ color, width, height }', @click='clickIcon')
    use(:xlink:href='`#${name}`')
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: String,
    width: String,
    height: String
  },
  computed: {
    className() {
      return ["svg-icon", `svg-icon-${this.name}`];
    }
  },
  methods: {
    clickIcon() {
      this.$emit("clickIcon");
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
