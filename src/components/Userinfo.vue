<template>
    <div class="userinfo">
        <div class="panel">
            <div class="header">主页</div>
            <div class="head-info">
                <img :src="userdata.avatar_url" class="home-avatar" alt="">
                <span class="loginname">{{userdata.loginname}}</span>
                <p>积分{{userdata.score}}</p> 
                <p>注册时间 {{userdata.create_at | dateFormat}}</p>
            </div>
        </div>
        <div class="panel">
            <div class="header">最近创建的话题</div>
            <ul class="recent-topics">
                <li v-for="topicitem in userdata.recent_topics" class="item" :key="topicitem.id">
                    <img :src="topicitem.author.avatar_url" class="avatar" alt="">
                    <router-link :to="{
                    name: 'post_content',
                    params: {
                      id: topicitem.id}
                      }">
                    <span class="title">{{topicitem.title}}</span>
                    </router-link>
                    <span class="time">{{topicitem.last_reply_at | dateFormat}}</span>
                </li>
            </ul>
        </div>
        <div class="panel">
            <div class="header">最近参与的话题</div>
            <ul>
                <li v-for="replyitem in userdata.recent_replies" class="item" :key="replyitem.id">
                    <img :src="replyitem.author.avatar_url" class="avatar" alt="">
                    <router-link :to="{
                    name: 'post_content',
                    params: {
                      id: replyitem.id}
                    }">
                    <span class="title">{{replyitem.title}}</span>
                    </router-link>
                    <span class="time">{{replyitem.last_reply_at | dateFormat}}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: "Userinfo",
  data: function() {
    return {
      userdata: {}
    };
  },
  methods: {
    getUserinfo() {
      this.$http
        .get("https://cnodejs.org/api/v1/user/" + this.$route.params.name)
        .then(res => {
          this.userdata = res.data.data;
        });
    }
  },
  beforeMount: function() {
    this.getUserinfo();
  }
};
</script>

<style scoped>
.userinfo {
  margin-right: 305px;
  font-size: 14px;
}

.panel {
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
}

.panel .header {
    background-color:#F6F6F6 ;
    padding: 10px;
}
.avatar {
    width: 30px;
    height: 30px;
    border-radius: 2px;
}

.home-avatar {
    width: 40px;
    height: 40px;
    border-radius: 2px;

}

.item {
    overflow: hidden;
    text-overflow:ellipsis;    
    white-space: nowrap;
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;
}

.item span,
.item img {
    vertical-align: top;
    line-height: 30px;
}

.title {
    color: #1F8ECE;
}

.time {
    text-align: right;
    float: right;
    width: 60px;
}
.head-info {
    padding: 10px;
}
.head-info p {
    margin: 4px 0;
}
.loginname {
    vertical-align: top;
}

</style>
