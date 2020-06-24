<template lang="pug">
  header.layout-header
    el-dropdown.f-r(@command='adminActionHandle')
      .c-userbox
        img.c-userbox__avatar(src='@/assets/6.jpg')
        h2.c-userbox__name 人生若只如初见
        i.el-icon-arrow-right
      el-dropdown-menu(slot='dropdown')
        el-dropdown-item(command='logout')
          | 退出登录
</template>

<script>
import storage from '@/utils/storage'

export default {
  name: "layout-header",
  methods: {
    adminActionHandle() {
      storage.remove('token')
      this.$router.push('/login')
      this.$message.success('退出成功！');
    }
  }
};
</script>

<style lang="scss">
.layout-header {
  position: fixed;
  top: 0;
  left: 180px;
  bottom: 0;
  right: 0;
  z-index: 1020;
  padding: 0 20px;
  border-bottom: 1px solid #dcdfe6;
  width: auto;
  height: 40px;
  line-height: 40px;
  background-color: rgba(#fff, 0.9);
  .c-userbox {
    display: flex;
    align-items: center;

    cursor: pointer;
    &__avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;

      margin-right: 0.5em;
    }
    &__name {
      font-size: 12px;
    }
  }
}
</style>