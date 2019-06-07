<template>
    <b-col md="4" sm="6" v-if="id" class="mb-4">
        <div class="card">
            <div class="thumb-image">
                <img v-bind:src="`${this.element.thumb}`" class="embed-responsive">
                <span v-if="isVideo">
                    <span class="play" v-b-modal="showModal(this.element.id)"></span>
                    <b-modal centered :id="'modal-' + this.element.id" :title="this.element.title">
                         <video controls autoplay muted class="embed-responsive">
                            <source :src="this.element.src" type="video/mp4">
                        </video>
                    </b-modal>
                </span>
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
        methods: {
            showModal(id) {
                return 'modal-' + id;
            },
        },
        props: ['id']
    }
</script>