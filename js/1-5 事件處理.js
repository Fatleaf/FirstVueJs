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
            // console.log(event.target.tagName);
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

//v-on,event
const test02 = Vue.createApp({
    data() {
        return {
            count: 0,
            num: 0
        }
    },
    methods: {
        add(num, event) {
            console.log(event.target.tagName);
            this.count += num;
        }
    }
}).mount('#test02');
//跟我上面的第三個計數器一樣的結果...傳入指定事件>>$event

//事件通用修飾子

//stop
const test03 = Vue.createApp({
    methods: {
        alert(val) {
            alert(val);
        }
    }
}).mount('#test03');
//如果沒有掛上.stop則點擊內層的時候會向外擴張

//4鍵盤按鍵
const test04 = Vue.createApp({
    data() {
        return {
            keypress: '',
            messages: [],
            msg: ''
        }
    },
    methods: {
        press(event){
            this.keypress = event.key;
            window.setTimeout(() => {
                event.target.value = '';
            }, 500);
        },
        addMessage(){
            this.messages.push(this.msg);
            this.msg = '';
        }
    }
}).mount('#test04');
//window.setTimeout( () => {...}, time))
