<template>
    <div class="slidebar">
        <div class="panel">
            <div class="header">作者</div>
            <router-link :to="{
            name:'user_info',
            params:{
              name:data.loginname
            }
            }">
            <img :src="data.avatar_url" alt="" class="avatar">
          </router-link>
            <div class="loginname">{{data.loginname}}</div>
            <div class="score">积分{{data.score}}</div>
        </div>
        <div class="panel">
            <div class="header">最近创建的话题</div>
            <ul class="recent-topics">
                <li v-for="topicitem in topiclimit" class="item" :key="topicitem.id">
                    <router-link :to="{
                    name: 'post_content',
                    params: {
                      id: topicitem.id}
                      }">
                    <span class="title">{{topicitem.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="panel">
            <div class="header">最近参与的话题</div>
                <ul>
                <li v-for="replyitem in replylimit" class="item" :key="replyitem.id">
                    <router-link :to="{
                    name: 'post_content',
                    params: {
                      id: replyitem.id,
                      name: replyitem.author.loginname}
                    }">
                    <span class="title">{{replyitem.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "SlideBar",
  data: function() {
    return {
      data: {}
    };
  },
  computed: {
    topiclimit() {
      if (this.data.recent_topics) {
        return this.data.recent_topics.slice(0, 5);
      }
    },
    replylimit() {
      if (this.data.recent_replies) {
          return this.data.recent_replies.slice(0, 5);
      }
    }
  },
  beforeMount: function() {
    this.$http
      .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then(res => {
        this.data = res.data.data;
        console.log(this.data);
      });
  }
};
</script>

<style scoped>
.slidebar {
  float: right;
}
.panel {
  width: 290px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
}

.panel .header {
  background-color: #f6f6f6;
  padding: 10px;
}

.item {
    overflow: hidden;
    text-overflow:ellipsis;    
    white-space: nowrap;
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;
}
.title {
    color: #1F8ECE;
}

.avatar {
    width: 100px;
    height: 100px;
    padding: 10px;
}
.loginname,
.score {
    padding-left: 10px;
padding-bottom: 10px;
}
</style>
