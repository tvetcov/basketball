<template>
    <b-col md="4" sm="6" v-if="id" class="mb-4">
        <div class="card">
            <div class="thumb-image">
                <img v-bind:src="`${this.element.thumb}`" class="embed-responsive">
                <span v-if="isVideo" class="play"></span>
            </div>
            <div class="card-body d-flex justify-content-between">
                <b class="text-uppercase m-0">{{this.element.title}}</b>
                <span class="text-muted">{{this.element.date}}</span>
            </div>
        </div>
    </b-col>
</template>
<script>
    export default {
        name: 'Card',
        data() {
            return {
                element: this.$store.getters['getById'](this.id),
            }
        },
        computed: {
            isVideo: function () {
                return this.element.type === 2;
            },
        },
        props: ['id']
    }
</script>