<template>
    <div id="app">
        <macResolver/>
    </div>
</template>

<script>
    import macResolver from './components/macResolver'
    export default {
        data() {
            return {}
        },
        components: {
            macResolver
        }
    }
</script>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        margin: 0 auto;
    }
    body{
        text-align: center;
    }
    h1 {
        color: red;
    }

</style>
