<template>
    <b-col md="4" sm="6" v-if="slamId" class="mb-4">
        <div class="card">
            <div class="thumb-image">
                <img v-bind:src="`${this.slam.thumb}`" class="embed-responsive">
                <span v-if="isVideo" class="play"></span>
            </div>
            <div class="card-body d-flex justify-content-between">
                <b class="text-uppercase m-0">{{this.slam.title}}</b>
                <span class="text-muted">{{this.slam.date}}</span>
            </div>
        </div>
    </b-col>
</template>
<script>
    export default {
        name: 'Card',
        data() {
            return {
                slam: this.$store.getters['getById'](this.slamId),
            }
        },
        computed: {
            isVideo: function () {
                return this.slam.type === 2;
            },
        },
        props: ['slamId']
    }
</script>