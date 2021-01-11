//更改內容訊息
const vm = Vue.createApp({

    // delimiters: ['%{','}%'], 與後端的{{}}衝突話可以取代
    data() {
        return {
            price: '200',
            quantity: '5',
            name: ''

        }
    }

}).mount('#app');
// vm.mount('#app'); 此方法跟上面方法一樣功能
vm.$data.name = '30cm';


//共用同一個data
const dataObj = {
    name2: '1231'
}

const vm1 = Vue.createApp({
    data() {
        return {...dataObj}
    },
}).mount('#vm1');

const vm2 = Vue.createApp({
    data() {
        return {...dataObj}
    },
}).mount('#vm2');

//...為JS展開運算符,後面必定接著一個陣列

vm1.$data.name2 = '阿不就';


//用vue寫html模板
const vm3 = Vue.createApp({
    template: `<h2>{{something}} 好棒棒</h2>`,
    data() {
        return {
            something: '這是Vue寫出來的<h2></h2>'
        }
    }
}).mount('#app2');

//進度1-3

//methods 方法
const vm4 = Vue.createApp({
    data() {
        return {
            price: '100',
            quantity: '8',
            message: '安安你好~'
        }
    },
    methods: {
        subtotalMethods: function() {
            console.log('methods');
            return this.price * this.quantity;
        }
    },
    computed: {
        subtotalComputed: function() {
            console.log('computed');
            return this.price * this.quantity;
        }
    }

}).mount('#app3');
//methods每次在顯示結果都會執行一次運算(效能低)
//computed會將計算後的結果暫存，他所屬的觀察屬性(this.xxxx)沒被更新的話，就不會重複被執行(效能高)ps:funtion無法帶入參數

//互相換算
const money = Vue.createApp({
    data(){
        return {
            gram: '1',
            twd: '1711'
        }
    },
    methods: {
        gramTotwd(){
            this.twd = Number.parseFloat(Number(this.gram) * 1711).toFixed(3);
        },
        twdTogram(){
            this.gram = Number.parseFloat(Number(this.twd) / 1711).toFixed(3);
        }
    }

}).mount('#goldChange');

const temperlate = Vue.createApp({
    data() {
        return {
            celsius: '1',
            fahrenheit: '33.8',
        }
    },
    methods: {
        c2f() {
            this.fahrenheit = Number.parseFloat(Number(this.celsius) * 9 / 5 + 32).toFixed(1);
        },
        f2c() {
            this.celsius = Number.parseFloat(Number((this.fahrenheit) - 32) * 5 / 9 ).toFixed(1);
        }
    }
}).mount('#temperature');


//一對多換算,只能單向輸入
const dollars = Vue.createApp({
    data() {
        return {
            // usa: '0.04',
            // jpy: '3.71',
            // egp: '0.56',
            twd: '1000'
        }
    },
    computed: {
        usa: {
            get() {
                return Number.parseFloat(Number(this.twd) * 0.04).toFixed(3); //台幣轉美金
            },
            set(val) {
                this.twd = Number.parseFloat(Number(val) / 0.04).toFixed(3); //美金轉台幣
            }
        },
        jpy: {
            get() {
                return Number.parseFloat(Number(this.twd) * 3.71).toFixed(3);
            },
            set(val) {
                this.twd = Number.parseFloat(Number(val) / 3.71).toFixed(3);
            }
        },
        egp: {
            get() {
                return Number.parseFloat(Number(this.twd) * 0.56).toFixed(3);
            },
            set(val) {
                this.twd = Number.parseFloat(Number(val) / 0.56).toFixed(3);
            }
        }
    }
}).mount('#dollarChange');

// 1-4

const test4 = Vue.createApp({
    data() {
        return {
            takeID: 'hello-world-a'
        }
    }
}).mount('#test4');
//在html標籤上使用vue需以>>;<< or >>v-bind:<<

const test4_1 = Vue.createApp({
    data() {
        return {
            isBtndisable: true
        }
    }
}).mount('#test4_1');
//可以更動開關是否啟用

const test4_2 = Vue.createApp({
    data() {
        return {
            message: '',
            message2: '安安你好!'
        }
    }
}).mount('#test4_2');
//基本v-model介紹

const test4_3 = Vue.createApp({
    data() {
        return {
            check_box: 1
        }
    }
}).mount('#test4_3');
//使用vue來做選擇radio

const test4_4 = Vue.createApp({
    data() {
        return {
            check_fruits: []
        }
    }
}).mount('#test4_4');
//使用vue來做多選擇

const test4_5 = Vue.createApp({
    data() {
        return {
            seleteds: ''
        }
    }
}).mount('#test4_5');