// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router";
import Axios from "axios";

Vue.prototype.$http = Axios
Vue.config.productionTip = false

Vue.filter('tabFormat', function (item) {
  if (item.top) {
    return "置顶";
  } else if (item.good) {
    return "精华";
  } else if (item.tab === "share") {
    return "分享";
  } else if (item.tab === "ask") {
    return "问答";
  } else {
    return "招聘";
  }
}
)
Vue.filter('dateFormat', function (date) {
  var past = new Date(date).getTime();
  var now = new Date().getTime();
  var t = (now - past) / 1000;
  if (t < 60) {
    return "刚刚";
  } else if (t >= 60 && t < 3600) {
    return Math.round(t / 60) + "分钟前";
  } else if (t >= 3600 && t < 86400) {
    return Math.round(t / 3600) + "小时前";
  } else if (t >= 86400 && t < 31536000) {
    return Math.round(t / 86400) + "天前";
  } else if (t >= 3153600) {
    return Math.round(t / 31536000) + "年前";
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



