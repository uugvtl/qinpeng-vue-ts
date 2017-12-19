<template>
  <div>
    <div class="background-register" >
      <div class="B-title" >缔妆殿堂管理系统</div>
      <div class="B-content" >
        <div class="B-box">

          <form action="" method="post">
            <div class="B-register">

              <div class="Need">
                <h1 class="clearfix"><span class="fl">用户名称</span><i class="fr">error</i></h1>
                <dl>
                  <dt class="fl user-name"></dt>
                  <dd class="fr">
                    <input title="用户名称" id="account" name="account" type="text" value="" placeholder="请输入用户名">
                  </dd>
                </dl>
              </div>

              <div class="Need">
                <h1 class="clearfix"><span class="fl">用户密码</span><i class="fr">error</i></h1>
                <dl>
                  <dt class="fl user-password"></dt>
                  <dd class="fr">
                    <input title="用户密码" id="password" name="password" type="password" value="" placeholder="请输入密码">
                  </dd>
                </dl>
              </div>

              <input type="hidden" name="" value="">
              <input class="B-button" type="submit" name="btn_submit" value="登录">
            </div>
          </form>

        </div>
      </div>
    </div>
    <div class="background-pic" ></div>
  </div>
</template>

<script lang="ts">
  import '@/assets/admin/style/login.css'
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class extends Vue {}

</script>

<style scoped>
</style>
