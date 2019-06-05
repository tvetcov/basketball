<template>
    <header>
        <b-row class="m-0">
            <b-col sm="4">
                <h3><b>{{total}}</b> Total</h3>
            </b-col>
            <b-col sm="4">
                <h3 v-if="videos > 0"><b>{{videos}}</b> Videos</h3>
                <h3 v-else><b>No</b> Videos</h3>
            </b-col>
            <b-col sm="4">
                <h3 v-if="pictures > 0"><b>{{pictures}}</b> Pictures</h3>
                <h3 v-else><b>No</b> Pictures</h3>
            </b-col>
        </b-row>
    </header>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                videos: Math.round(Math.random() * 20),
                pictures: Math.round(Math.random() * 20),
            }
        },
        computed: {
            total: function () {
                return this.videos + this.pictures;
            }
        }
    }
</script>