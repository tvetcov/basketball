<template>
    <b-col md="4" sm="6" v-if="slamId" class="mb-4">
        <div class="card">
            <div class="thumb-image">
                <img v-bind:src="`${this.slam.thumb}`" class="embed-responsive">
            </div>
            {{this.slam.title}}
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
        props: ['slamId']
    }
</script>