<template lang='pug'>
  .page-layout(:class='{ "c-aside--fold": this.asideFold }')
    layout-header
    layout-tabs
    layout-aside
    layout-main(v-if='!contentIsNeedRefresh')
    layout-footer
</template>

<script>
import layoutHeader from '@/components/layout/header'
import layoutAside from '@/components/layout/aside'
import layoutMain from '@/components/layout/main'
import layoutFooter from '@/components/layout/footer'
import layoutTabs from '@/components/layout/tabs'

import { mapState } from "vuex";
export default {
  name: 'page-layout',
  components: {
    layoutHeader,
    layoutAside,
    layoutMain,
    layoutFooter,
    layoutTabs
  },
  provide() {
    return {
      refresh() {
        this.$store.commit("system/updateContentIsNeedRefresh", true);
        this.$nextTick(() => {
          this.$store.commit("system/updateContentIsNeedRefresh", false);
        });
      }
    }
  },
  computed: {
    ...mapState("system", ["asideFold", "contentIsNeedRefresh"])
  }
}
</script>

<style lang="scss">
@import './index.scss'
</style>
