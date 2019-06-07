<template>
    <footer class="text-center">
        <b-row class="py-3">
            <b-col sm="12">created by {{this.name}}</b-col>
        </b-row>
    </footer>
</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {
                name: 'Nichita Tvetcov',
            }
        },
    }
</script>