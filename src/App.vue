<template>
    <div id="app">
        <Grid/>
    </div>
</template>

<script>
    import Grid from './components/Grid.vue'

    export default {
        name: 'app',
        components: {
            Grid,
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,700i&display=swap');
    @import "assets/styles/main";
</style>