<template>
    <div class="pagination">
        <button @click="handleBtn" class="btn">首页</button>
        <button @click="handleBtn" class="btn">上一页</button>
        <button v-if="judge" class="btn">...</button>
        <button v-for="(btn, index) in pageBtn" :key="index" :class="[{currbtn: btn === currpage},{btn: true}]" @click="handleBtn(btn)">
            {{btn}}
        </button>
        <button @click="handleBtn" class="btn">下一页</button>

    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: 'pagination',
    data: function () {
        return {
            pageBtn: [1, 2, 3, 4, 5, '...'],
            currpage : 1,
            judge: false
        }
    },
    methods: {
        handleBtn(btn){
            if (btn === '...') return
            if (typeof btn !== 'number') {
                switch (btn.target.innerText) {
                    case '上一页':
                        $('.currbtn').prev().click()
                        break;
                    case '下一页':
                        $('.currbtn').next().click()        
                        break;
                    case '首页':
                        this.pageBtn = [1, 2, 3, 4, 5, '...']
                        this.handleBtn(1)
                        break;
                    default:
                        break;
                }
                return
            }
            this.currpage = btn
            if (btn > 4) {
                this.judge = true
            } else {
                this.judge = false
            }
            if (this.currpage === this.pageBtn[4]) {
                this.pageBtn.shift()
                this.pageBtn.splice(4, 0, this.pageBtn[3]+1)
            } else if (this.currpage === this.pageBtn[0] && this.pageBtn[0] !== 1) {
                this.pageBtn.unshift(this.pageBtn[0]-1)
                this.pageBtn.splice(5, 1)
            }
            this.$emit('handle', this.currpage)
            console.log(this.currpage)
        }
    }
}
</script>

<style scoped>
.btn {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
}
.currbtn {
    background-color: #80BD02;
    color: #fff;
}

.pagination {
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
}
</style>


