<template lang="pug">
  aside.layout-aside
    .layout-aside__hd
      router-link.layout-brand(:to='{ name: "home" }', title='人生若只如初见')
        span.layout-brand--lg 人生 · 若只如初见
        span.layout-brand--sm 初 · 见

    .layout-aside__bd
      .layout-aside__menu-wrapper
        el-menu.layout-aside__menu(
          :unique-opened='true',
          :collapse='asideFold',
          :collapse-transition='true',
          :default-active='asideMenuActive'
        )
          menu-item(v-for='(menu, index) in menuList', :key='index', :menu='menu')

    .layout-aside__tool(@click='updateAsideFold(!asideFold)')
      .layout-aside__tool-bg
      .layout-aside__tool-btn
        svg-icon(name='outdent')
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { menuList } from "@/datas/menu.js";
import menuItem from "./menu-item";

export default {
  name: "layout-aside",
  provide() {
    return {
      gotoRouteHandle: this.gotoRouteHandle
    };
  },
  components: {
    menuItem
  },
  data() {
    return {
      menuList
    };
  },
  computed: {
    ...mapState("system", ["asideFold", "asideMenuActive"])
  },
  methods: {
    ...mapMutations("system", ["updateAsideFold"]),
    gotoRouteHandle(menu) {
      const { name = "home" } = menu;
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="scss">
.layout-aside {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 1020;
  width: 180px;
  background: #444;
  transition: width 0.3s;
  &__hd {
    position: absolute;
    overflow: hidden;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;

    // 从父级继承background颜色
    background-color: inherit;
    .layout-brand {
      display: block;
      margin: 0;
      color: #fff;

      &:hover {
        // 变亮模式
        background-color: lighten(#444, 20%);
      }

      &--sm {
        display: none;
      }
    }
  }

  &__tool {
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 160px;
    width: 20px;
    height: 50px;
    margin-top: -25px;
    z-index: 3;
    transition: all 0.2s ease;

    &-bg {
      box-sizing: border-box;
      width: 0;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      border-bottom: 9px solid transparent;
      border-right: 13px solid #d9dee4;
      border-top: 9px solid transparent;
      transition: all 0.2s ease;
    }

    &-btn {
      cursor: pointer;
      height: 50px;
      position: relative;
      right: -7px;
      text-align: center;
      line-height: 50px;
      transition: all 0.2s ease;

      .svg-icon {
        font-size: 15px;
        vertical-align: text-top;
      }
    }

    &:hover &-bg {
      border-bottom: 8px solid transparent;
      border-right: 20px solid #d9dee4;
      border-top: 8px solid transparent;
    }

    &:hover &-btn {
      left: 0;
    }
  }

  &__bd {
    margin-top: 40px;
    height: 100%;
    overflow: hidden;
  }
}
.layout-aside__menu {
  border-right: 0;
  width: 180px;
  color: #fff;

  &,
  .el-menu {
    background-color: #444;
  }

  &-wrapper {
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: content-box;

    width: 100%;
    height: calc(100% - 40px);
    padding-right: 20px;
  }

  .el-menu-item,
  .el-submenu__title {
    color: #fff;
    background-color: transparent;
    &:hover {
      background-color: #666;
    }
    i {
      color: #fff;
    }
  }

  .el-menu-item.is-active {
    background: #666;
  }

  .el-submenu.is-active:not(.is-opened) .el-submenu__title {
    background-color: #666;
  }
}
</style>