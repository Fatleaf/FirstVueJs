// 計數
const test01 = Vue.createApp({
    data() {
        return {
            count: 0,
            count2: 0,
            count3: 0,
            num: 0//可有可無...
        }
    },
    methods: {
        plus() {
            this.count2 = Number(this.count2 + 2); 
        },
        plus2() {
            this.count3 = Number(this.count3 + this.num);
        },
        clearNumber() {
            this.count3 = 0;
        }
    }
}).mount('#test01');
//v-on:click 可簡寫為 @click


