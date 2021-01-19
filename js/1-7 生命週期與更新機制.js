
const test01 = Vue.createApp({
    data() {
        return {
            msg: '',
            messages: ['螞蟻','食蟻獸','神奇寶貝','小智','人類'],
            scrollHeight: 0,
            realScrollHeight: 0
        }
    },
    methods: {
        addMessage() {
            this.messages.push(this.msg);
            this.msg = '';

            //更新後再抓取元素屬性
            this.$nextTick(() => {
                const el = document.querySelector('.messages');
                el.scrollTop = el.scrollHeight;
                this.realScrollHeight = el.scrollHeight;
                this.scrollHeight = el.scrollHeight;
            });
        }
    },
    mounted() {
        const el = document.querySelector('.messages');
        this.realScrollHeight = el.scrollHeight;
        this.scrollHeight = el.scrollHeight;
    }
}).mount('#test01');