
const test01 = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    components: {
        'medium-comp': {
            template: `
            <div class="box">
            <h2>自訂元件生出來的</h2>
            <p>這是區域元件</p>
            </div>`
        }
    }
});

test01.component('small-comp', {
    template: `
    <div class="box">
    <h2>自訂元件生出來的</h2>
    <p>這是全域元件</p>
    </div>
    `
});

test01.mount('#test01');
//區域元件的component要加s

const test02 = Vue.createApp({
    data() {
        return {
            count: 0
        }
    }
});

test02.component('small-comp', {
    template: `
    <div class="box">
    <h2>自訂元件生出來的</h2>
    <p>這是全域元件</p>
    </div>
    `
});

test02.mount('#test02');
//不能直接使用}).mount()形式，不然讀取不到自訂元件

const test03 = Vue.createApp({});
const $data = {
    count: 0
};

test03.component('test03-comp', {
    template: `
    <div class="box">
    <h2>計數: {{count}}</h2>
    <button @click="count++">點我++</button>
    <button @click="count = 0">點我歸零</button>
    </div>`,
    data() {
        return $data;
    }
});

test03.mount('#test03');
//test03資料都共用
//子元件的data必須為函數

const test04 = Vue.createApp({});

test04.component('test04-comp', {
    template: `
    <div class="box">
    <h2>計數: {{count}}</h2>
    <button @click="count += 2">點我++</button>
    <button @click="count = 0">點我歸零</button>
    </div>`,
    data: function() {
        return {
            count: 0
        }
    }
});

test04.mount('#test04');
//test04的data以函數的形式，每個都獨立儲存

const test05 = Vue.createApp({
    data() {
        return {
            msg: '這是外層訊息'
        }
    },

});

test05.component('test05-comp',{
    template: `
    <div class="box">
    <h2>{{ insideMsg }}</h2>
    <h2>{{ msg }}</h2>
    </div>`,
    props: ["insideMsg", "insideMsg02", "insideMsg03"],
    data: function() {
        return {
            msg: '這是內層的訊息'
        }
    }
});

test05.mount('#test05');
//props的命名需要對應v-bind:xxxx才能用，insideMsg => inside-msg

const test06 = Vue.createApp({
    data() {
        return {
            books: [
                {
                    name: '天邊雲朵',
                    author: '地上人',
                    price: '$200元台幣'
                },
                {
                    name: '路邊花朵',
                    author: '路上人',
                    price: '$200元台幣'
                },
                {
                    name: '海邊水花',
                    author: '海邊人',
                    price: '$500元台幣'
                }
            ]
        }
    }
});

test06.component('insideBook',{
    template: `
    <div class="box">
        <div>書名: <input type="text" v-model="bookInfo.name"></div>
        <div>作者: <input type="text" v-model="bookInfo.author"></div>
        <div>價格: <input type="text" v-model="bookInfo.price"></div>
    </div>
    `,
    props:{
        'bookInfo': {
            type: Object
        }
    } 
});

test06.mount('#test06');

//test06的子元件的變更會直接影響到父元件，這是bug!!


const test07 = Vue.createApp({
    data() {
        return {
            items: [
                {
                    name: '鐵斧',
                    ion: 'iron',
                    price: '200'
                },
                {
                    name: '水斧',
                    ion: 'water',
                    price: '300'
                },
                {
                    name: '火斧',
                    ion: 'fire',
                    price: '500'
                },
                {
                    name: '毒斧',
                    ion: 'posion',
                    price: '100'
                }
            ]
        }
    }
});

test07.component('superItem',{
    template: `
    <div class="box">
        <div>武器: <input type="text" v-model="name"></div>
        <div>成分: <input type="text" v-model="ion"></div>
        <div>價格: <input type="text" v-model="price"></div>
    </div>
    `,
    props: ['name', 'ion', 'price']
    
});

test07.mount('#test07');

const test08 = Vue.createApp({
    data() {
        return {
            items: [
                {
                    name: '鐵斧',
                    ion: 'iron',
                    price: '200'
                },
                {
                    name: '水斧',
                    ion: 'water',
                    price: '300'
                },
                {
                    name: '火斧',
                    ion: 'fire',
                    price: '500'
                },
                {
                    name: '毒斧',
                    ion: 'posion',
                    price: '100'
                }
            ]
        }
    }
});

test08.component('thoseItems', {
    props: ['name', 'ion', 'price'],
    data() {
        return {
            itemName: this.name,
            itemIon: this.ion,
            itemPrice: this.price
        }
    },
    template: `
    <div class="box">
        <div>武器: <input type="text" v-model="itemName"></div>
        <div>成分: <input type="text" v-model="itemIon"></div>
        <div>價格: <input type="text" v-model="itemPrice"></div>
    </div>
    `
});

test08.mount('#test08');

const longData = {
    name: '犬科',
    childData: [{
        name: '哈士奇',
        childData: [{
            name: '活潑好動',
            url: 'https://img.alicdn.com/imgextra/i4/2850290282/TB2IuWTjiCYBuNkSnaVXXcMsVXa_!!2850290282-0-beehive-scenes.jpg_2200x2200Q50s50.jpg'
        }]
    },
    {
        name: '材犬',
        childData: [{
            name: '陽光微笑',
            url: 'https://img.ltn.com.tw/Upload/playing/page/2019/09/14/190914-21024-01-WvNZA.jpg'
        }]
    },
    {
        name: '台灣土狗',
        childData: [{
            name: '食物是老大',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_8_Year_Taiwan_Dog.jpg/1200px-Black_8_Year_Taiwan_Dog.jpg'
        },
        {
            name: '體重',
            childData:[{
                name: '18kg'
            }]
        }]
    }]
};

const test09 = Vue.createApp({
    data() {
        return {
            longData
        }
    }
});

test09.component('menu-comp', {
    name: `menu-comp`,
    props: {
        title: String,
        url: String,
        child: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    template:`
        <ul>
            <li>
                <template v-if="child.length > 0">
                    <h2 class="has-child box"
                    :class="{ 'is-open': isOpen }"
                    @click="isOpen = !isOpen">{{ title }}</h2>
                    <menu-comp 
                    v-show="isOpen"
                    v-for="c in child"
                    :title="c.name"
                    :child="c.childData"
                    :url="c.url"
                    />
                </template>
                <a :href="url" target="_blank" v-else>{{ title }}</a>
            </li>
        </ul>
    `
});

test09.mount('#test09');

const test10 = Vue.createApp({
    data() {
        return {
            msg: '你好~'
        }
    },
    provide() {
        return {
            heeeeello: this.msg,
            heeeeello2: Vue.computed(() => this.msg)//子層傳回來的值可與父層連動
        };
    }
});

test10.component('list-comp', {
    template: `
    <ul>
        <li v-for="s in 3">
        {{ s }}
        <list-item />
        </li>
    </ul>
    `,
    components: {
        'list-item': {
            inject: ['heeeeello','heeeeello2'],
            template: `
            <div>heeeeello: {{ heeeeello }}</div>
            <div>heeeeello2: {{ heeeeello2.value }}</div>
            `
        }
    }
});

test10.mount('#test10');

const test10_1 = Vue.createApp({
    data() {
        return {
            message: 'test10練習'
        }
    },
    provide() {
        return {
            childMsg: this.message,
            childMsg2: Vue.computed(() => this.message)//傳出
        }
    }
});

test10_1.component('child-comp', {
    template: `
        <ul>
            <li v-for="m in 5">
                {{ m }}
                <grand-child />
            </li>
        </ul>
    `,
    components: {
        'grand-child': {
            inject: ['childMsg', 'childMsg2'],
            template: `
            <div>childMsg:{{childMsg}}</div>
            <div>childMsg2:{{childMsg2.value}}</div>  
            `
            //inject 接收
        }
    }
});

test10_1.mount('#test10_1');

// Vue Composition API
const {
    ref,
    watch,
    createApp
} = Vue;

const sum = ref(0);
const plus = () => sum.value++;
const reset = () => sum.value = 0;

const test11 = createApp({
    setup() {
        return {
            sum,
            plus
        };
    }
});

test11.component('btn-counter', {
    template: `<button @click="plus">你按了我{{ count }}次</button>`,
    setup(props, {
        emit
    }) {
        const count = ref(0);
        const plus = () =>{
            count.value++
            emit('add-sum');
        };
        watch(sum, v=> count.value = v === 0 ? 0 : count.value);
        return {
            count,
            plus
        }
    }
});

test11.component('btn-reset', {
    template: `<button @click="reset">清除</button>`,
    setup() {
        return {
            reset
        }
    }
});

test11.mount('#test11');


// ref基本用法
const test12 = Vue.createApp({
    data() {
        return {
            msg: '父層元件訊息'
        }
    },
    provide() {
        return {
            msgff: this.msg
        }
    },
    methods: {
        handle() {
            console.log(this.$refs.mychild.msgfc)
            console.log(this.$refs.mychild.msgff)
            console.log(this.$refs.mytext.value)
        }
    }
});

test12.component('hello', {
    template: `
        <div>父元件訊息從子元件顯示 :{{ msgff }}</div>
        <div>子元件的訊息:{{ msgfc }}</div>
    `,
    data() {
        return {
            msgfc: '這是子元件訊息'
        }
    },
    inject: ['msgff']
});

test12.mount('#test12');