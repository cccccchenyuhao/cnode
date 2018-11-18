<template>
    <div class="article">
        <div class="article-header">
            <span :class="[{top: data.top},{tab: true},{good:data.good}]">{{data | tabFormat}}</span>
            <span class="article-title">{{data.title}}</span>
            <div class="article-info">
            <span>• 发布于{{data.last_reply_at | dateFormat}} • </span><span>作者{{data.author.loginname}}</span>
            <span>
                {{data.visit_count}}次浏览
            </span>
            <span>
                来自{{data | tabFormat}}
            </span>
            </div>   
        </div>
        <div v-html="data.content" class="article-body">
        </div>
        <div class="article-reply">
            <div class="reply-header">
                {{data.reply_count}} 回复
            </div>
            <ul>
                <li class="reply-item" v-for="(reply, index) in data.replies" :key="reply.id">
                    <div>
                        <router-link :to="{
                            name: 'user_info',
                            params: {
                                name: reply.author.loginname
                            }
                        }">
                            <img :src="reply.author.avatar_url" alt="">
                            <span class="reply-username">{{reply.author.loginname}}</span>
                        </router-link>



                        <span class="reply-userinfo">{{index+1}}楼•{{reply.create_at | dateFormat}}</span>
                    </div>
                    <div class="reply" v-html="reply.content">
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Article",
  data: function() {
    return {
      data: {
        author: {
          loginname: ""
        }
      }
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true) {
            this.data = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  watch: {
    $route(to, from) {
      this.getArticleData();
    }
  },
  beforeMount: function() {
    this.getArticleData();
  }
};
</script>

<style>
@import "../assets/markdown-github.css";
.markdown-text img {
  width: 92% !important;
}
.article {
  margin-right: 305px;
  border-radius: 4px;
  font-size: 14px;
}
.article-header {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  background-color: #fff;
}
.article-title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}
.article-body {
  overflow-x: scroll;
  background-color: #fff;
  padding: 10px;
  line-height: 1.7em;
}
.markdown-text p {
  margin: 10px 0;
}
.markdown-text h1,
.markdown-text h2,
.markdown-text h3,
.markdown-text h4,
.markdown-text h5,
.markdown-text h6 {
  margin: 14px 0;
}
.markdown-text img {
  display: block;
  margin: 10px 0;
}

.tab {
  float: left;
  background-color: #e5e5e5;
  padding: 2px 4px;
  margin-right: 6px;
  margin-top: 12px;
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
.article-info {
  margin-top: 10px;
  font-size: 12px;
  color: #838383;
}

.article-info span {
  padding-right: 4px;
}

.article-reply {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
}
.reply-item {
  padding: 10px;
  border-top: 1px solid #e1e1e1;
}
.reply-header {
  font-size: 14px;
  padding: 10px;
  background-color: #f6f6f6;
}
.reply-item img {
  width: 30px;
  height: 30px;
}
.reply-item span {
  vertical-align: top;
}
.reply {
  padding-left: 50px;
  margin-bottom: 20px;
}
.reply-username {
  padding: 2px 4px;
}
.reply-userinfo {
  color: #80bb05;
  font-size: 11px;
}
</style>

