import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article";
import PostList from "../components/PostList";
import Userinfo from "../components/Userinfo";
import SlideBar from "../components/SlideBar";
import Pagination from "../components/Pagination";

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'root',
            path: "/",
            components: {
                main: PostList
            }
        },
        {
            name: 'post_content',
            path: "/article/?id=:id&name=:name",
            components: {
                main: Article,
                slidebar: SlideBar
            }
        },
        {
            name: 'user_info',
            path: '/userinfo/:name',
            components: {
                main: Userinfo
            }
        }
    ]
})
