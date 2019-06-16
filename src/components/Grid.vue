<template>
    <div class="page-wrapper">
        <Header :videos="this.videos" :pictures="this.pictures"/>
        <filters @selectedType="filterByType" @selectedYear="filterByYear" @selectedSorting="orderBy"/>
        <router-view :elements="elements" :isEmpty="isListEmpty"></router-view>
    </div>
</template>
<script>
    import Filters from './Filters.vue'
    import Elements from './Elements.vue'
    import Header from './Header.vue'
    import data from '../assets/data.js'

    export default {
        name: 'Grid',
        data() {
            return {
                elements: this.$store.getters.get,
                isListEmpty: false,
            }
        },
        computed: {
            videos: function () {
                return this.$store.getters.getByType(2).length
            },
            pictures: function () {
                return this.$store.getters.getByType(1).length
            },
        },
        beforeCreate: function () {
            this.$store.dispatch('setAllItems', data);
        },
        beforeMount: function () {
            let filter = this.$route.params.filter;
            if (!filter) {
                return;
            } else if (isNaN(+filter) && filter !== 'all') {
                this.orderBy(filter);
                return;
            } else if (+filter <= 2) {
                this.filterByType(+filter);
                return;
            }
            this.filterByYear(filter);
        },
        components: {
            Filters,
            Elements,
            Header
        },
        methods: {
            filterByType(type) {
                this.$router.push({name: 'filter', params: {filter: type}});
                if (type === 0) {
                    this.resetFilters();
                    return;
                }
                this.$store.dispatch('filterByType', type);
                this.elements = this.$store.getters.get;
            },
            filterByYear(year) {
                if (isNaN(year)) {
                    this.resetFilters();
                    return;
                }
                this.$router.push({name: 'filter', params: {filter: year}});
                this.$store.dispatch('filterByYear', year);
                this.elements = this.$store.getters.get;
            },
            orderBy(sorting) {
                this.$router.push({name: 'filter', params: {filter: sorting}});
                if (sorting === 'asc') {
                    this.elements = this.elements.sort(sortById);
                    return;
                }
                this.elements = this.$store.getters.get.sort(sortById).reverse();
            },
            resetFilters() {
                this.$store.dispatch('setAllItems', data);
                this.elements = this.$store.getters.get;
                this.$router.push({name: 'filter', params: {filter: 'all'}});
            }
        },
        watch: {
            elements: function (val) {
                if (val < 1) {
                    this.isListEmpty = true;
                } else {
                    this.isListEmpty = false;
                }
            }
        }
    }

    function sortById(left, right) {
        if (left.id > right.id) {
            return 1;
        }
        return -1;

    }
</script>