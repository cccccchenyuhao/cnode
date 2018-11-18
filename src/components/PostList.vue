<template>
    <div class="postlist">
        <div class="loading" v-if="isloading"><img src="../assets/loading.gif" alt=""></div>

        <ul class="item-ct">
            <li class="item clearfix"   v-for="item in data" :key="item.id">
                <a  class="item-avator"><img :src="item.author.avatar_url" alt=""></a>
                <div class="count"><span class="count-reply" v-text="item.reply_count"></span>/<span class="count-visit" v-text="item.visit_count"></span></div>
                <span :class="[{top: item.top},{tab: true},{good:item.good}]">{{item | tabFormat}}</span>
                <router-link :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                  name: item.author.loginname}
                  }">
                <div class="item-title"><span v-text="item.title"></span></div>
                </router-link>
                <span class="time">{{item.last_reply_at|dateFormat}}</span>
            </li>
            <li>
              <pagination @handle="renderList"></pagination>
            </li>
        </ul>

    </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "PostList",
  methods: {
    renderList(val) {
      this.page = val;
      this.getData();
      window.scrollTo(0, 0)
    },
    getData() {
      var _this = this;
      this.isloading = true;
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: _this.page,
            limit: _this.limit
          }
        })
        .then(function(res) {
          _this.isloading = false;
          _this.data = res.data.data;
        });
    }
  },
  beforeMount: function() {
    this.getData();
  },
  data: function() {
    return {
      isloading: false,
      data: [],
      page: 1,
      limit: 20
    };
  },
  components: {
    Pagination
  }
};
</script>

<style scoped>
.item-ct {
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  background-color: #fff;
  width: 90%;
}

.loading {
  margin-top: 20px;
  text-align: center;
}

.loading img {
  height: 20px;
}

.item {
  position: relative;
  padding: 10px;
  border-top: 1px solid #f0f0f0;
}

.item-ct {
  margin-top: 20px;
}

.item-title {
  padding: 0 10px;
  width: calc(100% - 220px);
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-avator {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: block;
  float: left;
}
.item-avator img {
  width: 100%;
  height: 100%;
}

.count {
  float: left;
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #b4b4b4;
}
.tab {
  float: left;
  background-color: #e5e5e5;
  margin-top: 4px;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.top {
  background: #80bd01;
}
.good {
  background-color: #ff9e13;
}

.count-visit {
  font-size: 10px;
  color: #b4b4b4;
}
.count-reply {
  font-size: 14px;
  color: #9e78c0;
}

.time {
  text-align: right;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 60px;
  color: #778087;
  font-size: 12px;
}
</style>


