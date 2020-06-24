<template lang='pug'>
  .page-login
    .page-login__dataForm-box
      el-form(:model='dataForm', :rules='dataRule', ref='dataForm', @keyup.enter.native='submitHandle')
        el-form-item(label='用户名', prop='account')
          el-input(v-model='dataForm.account')
        el-form-item(label='密码', prop='password', prefix-icon='el-icon-unlock')
          el-input(v-model='dataForm.password')
        el-form-item
          el-button(type='success', :disabled='!canSubmit' :loading='submitting' @click='submitHandle') 登陆
</template>
<script>
import { isPhone, isEmail } from '@/utils'
import storage from '@/utils/storage'

export default {
  name: 'page-login',
  data() {
    const validateAccount = (rule, value, callback) => {
      if(!value) return callback(new Error('账号不能为空'))

      if(isPhone(value)) {
        this.accountType = 'phone'
        return callback()
      }

      if(isEmail(value)) {
        this.accountType = 'email'
        return callback()
      }

      return callback(new Error('账号格式错误'))
    }

    return {
      dataForm: {
        account: '18284583308',
        password: '123'
      },
      dataRule: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },

      accountType: '',

      errorMsg: "",
      submitting: false
    }
  },
  computed: {
    canSubmit() {
      return this.dataForm.account && this.dataForm.password;
    }
  },
  methods: {
    submitHandle() {
      if(this.submitting) return;
      this.submitting = true;

      this.$refs['dataForm'].validate(valid => {
        if(!valid) return this.submitting = false;

        // 接口调用处
        // params: {
        //   [this.accountType]: this.dataForm.account,
        //   password: this.dataForm.password
        // }
        this.$message.success('登陆成功！');
        this.submitting = false;
        storage.write('token', 'yq666');
        this.$router.push('/home');
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>