// 分頁
const test01 = Vue.createApp({
    data() {
        return {
            currentTab: 'shoes',
            tabs: ['shoes', 'colths', 'glass'],
            msg: []
        }
    },
    computed: {
        tabComponent() {
            return `tab-${ this.currentTab.toLowerCase() }`
        }
    },
    methods: {
        notify(value) {
            this.msg.push(value);
        }
    }
});

test01.component('tab-shoes', {
    name: 'tab-shoes',
    template: `
        <div class="tab-content"><input v-model="title"></div>
    `,
    data() {
        return {
            title: 'shoes contents'
        }
    },
    created() {
        this.$emit('update', `${this.$options.name} 建立.`)
    },
    mounted() {
        this.$emit('update', `${this.$options.name} 掛載.`);
    },
    unmounted() {
        this.$emit('update', `${this.$options.name} 銷毀.`);
    },
    activated() {
        this.$emit('update', `${this.$options.name} 作用中.`);
    },
    deactivated() {
        this.$emit('update', `${this.$options.name} 未被作用.`);
    }
});

test01.component('tab-colths', {
    name: 'tab-colths',
    template: `
        <div class="tab-content"><input v-model="title"></div>
    `,
    data() {
        return {
            title: 'colths contents'
        }
    },
    created() {
        this.$emit('update', `${this.$options.name} 建立.`)
    },
    mounted() {
        this.$emit('update', `${this.$options.name} 掛載.`);
    },
    unmounted() {
        this.$emit('update', `${this.$options.name} 銷毀.`);
    },
    activated() {
        this.$emit('update', `${this.$options.name} 作用中.`);
    },
    deactivated() {
        this.$emit('update', `${this.$options.name} 未被作用.`);
    }
});

test01.component('tab-glass', {
    name: 'tab-glass',
    template: `
        <div class="tab-content"><input v-model="title"></div>
    `,
    data() {
        return {
            title: 'glass contents'
        }
    },
    created() {
        this.$emit('update', `${this.$options.name} 建立.`)
    },
    mounted() {
        this.$emit('update', `${this.$options.name} 掛載.`);
    },
    unmounted() {
        this.$emit('update', `${this.$options.name} 銷毀.`);
    },
    activated() {
        this.$emit('update', `${this.$options.name} 作用中.`);
    },
    deactivated() {
        this.$emit('update', `${this.$options.name} 未被作用.`);
    }
});

test01.mount('#test01');


const test02 = Vue.createApp({
    data() {
        return {
            msg: '這是父層的訊息'
        }
    }
});

test02.component('hello-comp',{
    template: `
        <div>
            hello!
            <br>
            <slot>喔吼喔吼</slot>
        </div>
    `,
    data() {
        return {
            msg: '這是子層訊息'
        }
    }
});

test02.mount('#test02');