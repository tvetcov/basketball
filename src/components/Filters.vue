<template>
    <b-row class="text-center py-3 filters">
        <by-type @selectedType="selectedType"/>
        <by-year @selectedYear="selectedYear"/>
        <sorting @selectedSorting="selectedSorting"/>
    </b-row>
</template>
<script>
    import ByType from "./Filters/ByType";
    import ByYear from "./Filters/ByYear";
    import Sorting from "./Filters/Sorting";

    export default {
        name: 'Filters',
        components: {Sorting, ByYear, ByType},
        methods: {
            selectedType(type) {
                this.$emit('selectedType', type);
            },
            selectedYear(year) {
                this.$emit('selectedYear', year);
            },
            selectedSorting(sorting) {
                this.$emit('selectedSorting', sorting);
            }
        },
    }

</script>