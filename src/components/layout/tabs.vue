<template lang="pug">
  .layout-tabs__wrapper
    .layout-tabs
      .layout-tabs__refresh.fz-lg(@click='refresh()')
        i.el-icon-refresh.va-middle
        span.va-middle(style='margin-left: 0.5em;margin-right: 2em;') 刷新

      el-dropdown.layout-tabs__tool
        i.el-icon-arrow-down
        el-dropdown-menu(slot="dropdown")
          el-dropdown-item(@click.native="tabsCloseCurrentHandle()") 关闭当前标签页
          el-dropdown-item(@click.native="tabsCloseOtherHandle()") 关闭其它标签页
          el-dropdown-item(@click.native="tabsCloseAllHandle()") 关闭全部标签页

      el-tabs(v-model='mainTabsActive', @tab-click='selectedTabHandle', @tab-remove='removeTabHandle')
        el-tab-pane(:lazy='true', :closeable='false', name='home', lable='首页')
          svg-icon(name='home', slot='label')
        el-tab-pane(
          v-for="item in mainTabs",
          :lazy="true",
          :closable="true",
          :key="item.name",
          :name="item.name",
          :label="item.title"
        )

</template>

<script>
import { deepClone } from "@/utils";

export default {
  name: "CTabs",
  inject: ["refresh"],
  computed: {
    mainTabsActive: {
      get() {
        return this.$store.state.system.mainTabsActive;
      },
      set(val) {
        this.$store.commit("system/updateMainTabsActive", val);
      }
    },
    mainTabs: {
      get() {
        return this.$store.state.system.mainTabs;
      },
      set(val) {
        this.$store.commit("system/updateMainTabs", val);
      }
    },
    asideMenuActive: {
      get() {
        return this.$store.state.system.asideMenuActive;
      },
      set(val) {
        this.$store.commit("system/updateAsideMenuActive", val);
      }
    }
  },
  watch: {
    $route: "routeChangeHandle"
  },
  methods: {
    routeChangeHandle(route) {
      if (route.meta.isTab) {
        const mainTabs = deepClone(this.mainTabs);
        let tab = mainTabs.filter(item => item.name === route.name)[0];

        if (!tab) {
          tab = {
            name: route.name,
            title: route.meta.title,
            id: route.meta.id || route.name
          };

          mainTabs.push(tab);
        }

        this.mainTabs = mainTabs;
        this.mainTabsActive = tab.name;
        this.asideMenuActive = tab.name;
      }
    },
    selectedTabHandle(tab) {
      this.$router.push({ name: tab.name })
    },
    removeTabHandle(tabName) {
      this.mainTabs = this.mainTabs.filter(item => item.name !== tabName);

      if (this.mainTabs.length) {
        if (tabName === this.mainTabsActive) {
          const { name } = this.mainTabs[
            this.mainTabs.length - 1
          ];
          this.$router.push({ name }, () => {
            this.mainTabsActive = name;
          });
        }
      } else {
        this.asideMenuActive = "";
        this.mainTabsActive = "home";
        this.$router.push({ name: "home" });
      }
    },
    tabsCloseCurrentHandle() {
      this.removeTabHandle(this.mainTabsActive);
    },
    tabsCloseOtherHandle() {
      this.mainTabs = this.mainTabs.filter(
        item => item.name === this.mainTabsActive
      );
    },
    tabsCloseAllHandle() {
      this.mainTabs = [];
      this.asideMenuActive = "";
      this.mainTabsActive = "home";
      this.$router.push({ name: "home" });
    }
  },
  created() {
    this.routeChangeHandle(this.$route);
  }
};
</script>

<style lang="scss">
.layout-tabs {
  position: fixed;
  top: 41px;
  left: 180px;
  right: 0;
  z-index: 1020;
  padding: 0 175px 0 0;
  border-bottom: 1px solid #dcdfe6;
  background-color: rgba(#fff, 0.9);

  &__tool,
  &__refresh {
    position: absolute;
    top: 0;
    z-index: 1022;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    transition: right 0.3s;
  }

  &__tool {
    right: 0;
    width: 40px;
    height:  39px;
    text-align: center;
    background-color: #F5F7FA;
  }

  &__refresh {
    right: 40px;
  }

  .el-tabs__header {
    margin: 0;
  }

  .el-tabs__nav-wrap::after {
    display: none;
  }

  // 标签页超过容器宽度时 前翻/后翻按钮 垂直居中
  .el-tabs__nav-next,
  .el-tabs__nav-prev {
    line-height: 40px;
  }

  // 移除激活时的默认下划线
  .el-tabs__active-bar {
    display: none;
  }

  // 激活状态
  .el-tabs__item {
    padding: 0 15px !important;
    height: 40px;
    line-height: 40px;
    color: #5F656F;
    vertical-align: inherit;
    transition: background-color 0.3s;

    &:hover {
      color: #007dfd;
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: "";
      width: 0;
      height: 2px;
      background-color: #007dfd;
      transition: left 0.3s cubic-bezier(0.23, 1, 0.32, 1),
        width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &.is-active {
      color: #007dfd;
      background-color: rgba(#F5F7FA, 0.9);
      &:after {
        left: 0;
        width: 100%;
      }
    }
  }

  &__wrapper {
    position: relative;
    height: 40px;
  }
}
</style>