<!-- 中转页面 -->
<template>
  <!-- header -->
  <div></div>
  <!-- footer -->
</template>
<script>
export default {
  data() {
    return {};
  },
  // 页面渲染之后执行
  mounted() {
    let token = this.$route.query.token;
    let name = this.$route.query.name;
    let openid = this.$route.query.openid;
    // 调用父vue方法
    window.parent["loginCallback"](name, token, openid);
  },
};
</script>
