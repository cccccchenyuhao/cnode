<template>
    <div class="header">
        <div class="header-wrap clearfix">
            <a href="/" class="logo">
                <img src="../assets/logo.svg" alt="">
            </a>
            <ul class="nav clearfix">
                <li><a href="">首页</a></li>
                <li><a href="">新手入门</a></li>
                <li><a href="">API</a></li>
                <li><a href="">关于</a></li>
                <li><a href="">注册</a></li>
                <li><a href="">登录</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  min-width: 960px;
  max-width: 1400px;
  height: 50px;
  background-color: #444;
}
.header-wrap {
  margin: 0 auto;
  width: 90%;
  height: 100%;
}
.logo {
  display: block;
  float: left;
  height: 100%;
}

.logo img {
  width: 120px;
  height: 34px;
  margin-top: 8px;
}

.nav {
  float: right;
  margin-top: 14px;
}

.nav li {
  float: left;
}
.nav li a {
  padding: 10px 15px;
  color: #ccc;
}
</style>

