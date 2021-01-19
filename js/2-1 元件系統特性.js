
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
        <div>武器: <input type="text" v-model="itemInfo.name"></div>
        <div>成分: <input type="text" v-model="itemInfo.ion"></div>
        <div>價格: <input type="text" v-model="itemInfo.price"></div>
    </div>
    `,
    props: {
        'itemInfo': {
            type: Object
        }
    }
});

test07.mount('#test07');