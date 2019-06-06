<template>
    <b-col sm="4">
        {{this.slam.title}}
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