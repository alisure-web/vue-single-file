<template>
    <div>
        <p>{{message}}</p>
        <div>我是组件中的div</div>
    </div>
</template>

<script>
    export default{
        el: "#index",
        data(){
            return{
                message: "我是组件中的data"
            }
        }
    }
</script>