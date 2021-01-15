const test01 = Vue.createApp({
    data() {
        return {
            isShow: true,
            count: ''
        }
    }
}).mount('#test01');

const test02 =Vue.createApp({
    data() {
        return {
            check_box: '1',
            contentA: '',
            contentB: '',
            fruits: ['apple', 'banana', 'tomato', 'pineapple', 'orange'],
            profiles: {
                name: '小明',
                age: '18',
                height: '180cm',
                weight: '80kg'
            },
            numbers: [1, 3, 5, 8, 50, 10, 4, 90, 7, 80],
            numbers2: [1, 3, 5, 8, 50, 10, 4, 90, 7, 80, 100, 200, 1],
            things: [
                { 
                    id: 'task01',
                    title: '看Vue.js',
                    isDone: false
                },
                {
                    id: 'task02',
                    title: '看狗',
                    isDone: false
                },
                {
                    id: 'task03',
                    title: '看山',
                    isDone: false
                },
                {
                    id: 'task04',
                    title: '看小',
                    isDone: false
                }
            ]
        }
    },
    computed: {
        sortNumbers() {
            return [...this.numbers].sort((a, b) => b - a);
        },
        sortB2S() {
            return [...this.numbers2].sort((a, b) => a - b);
        },
        todoList() {
            return this.things.filter( d => !d.isDone )
        },
        doneList() {
            return this.things.filter( d => d.isDone )
        }
    }
}).mount('#test02');
//[...this.numbers]複製一份來用，如果沒用複製來用，原本的numbers也會被重新排序