<template>
    <div id="app">
        <Header/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        name: 'app',
        components: {
            Header,
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,700i&display=swap');
    @import "assets/styles/main";
</style>