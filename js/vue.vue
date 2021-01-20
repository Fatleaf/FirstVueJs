<template>
    <div id="test01">
        <p>test01</p>
        <hr>
        <p>{{ msg }}</p>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
    const test01 = Vue.createApp({
        data() {
            return {
                msg: '測試!'
            }
        }
    }).mount('#test01');
</script>