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
            contentB: ''
        }
    }
}).mount('#test02');
