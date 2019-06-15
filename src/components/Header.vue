<template>
    <header>
        <b-row class="m-0">
            <b-col sm="4">
                <h3><b>{{this.total}}</b> Total</h3>
            </b-col>
            <b-col sm="4">
                <h3 v-if="videos > 0"><b>{{this.videos}}</b> Videos</h3>
                <h3 v-else><b>No</b> Videos</h3>
            </b-col>
            <b-col sm="4">
                <h3 v-if="pictures > 0"><b>{{this.pictures}}</b> Pictures</h3>
                <h3 v-else><b>No</b> Pictures</h3>
            </b-col>
        </b-row>
    </header>
</template>
<script>
    export default {
        name: 'Header',
        computed: {
            total: function () {
                return this.videos + this.pictures;
            }
        },
        props: ['videos', 'pictures'],
    }
</script>