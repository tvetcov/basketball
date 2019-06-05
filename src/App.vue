<template>
    <div id="app">
        <Header/>
        <Grid/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Grid from './components/Grid.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Grid,
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,700i&display=swap');
    @import "assets/styles/main";
</style>