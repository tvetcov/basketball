<template>
    <b-col sm="4">
        <b-button-group size="sm">
            <b-button variant="success" @click="selectedType(0)">Reset filters</b-button>
            <b-button variant="info" @click="selectedType(1)">Pictures</b-button>
            <b-button variant="warning" @click="selectedType(2)">Videos</b-button>
        </b-button-group>
    </b-col>
</template>
<script>
    export default {
        name: 'ByType',
        methods: {
            selectedType(type) {
                this.$emit('selectedType', type);
            },
        },
    }

</script>