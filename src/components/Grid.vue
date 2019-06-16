<template>
    <div>
        <Header :videos="this.videos" :pictures="this.pictures"/>
        <filters @selectedType="filterByType" @selectedYear="filterByYear" @selectedSorting="orderBy"/>
        <router-view :elements="elements"></router-view>
        <Footer/>
    </div>
</template>
<script>
    import Filters from './Filters.vue'
    import Elements from './Elements.vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'

    export default {
        name: 'Grid',
        data() {
            return {
                elements: this.$store.getters.get,
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
        created: function () {
            let filter = this.$route.params.filter;
            if (!filter) {
                return;
            } else if (isNaN(+filter)) {
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
            Footer,
            Header
        },
        methods: {
            filterByType(type) {
                this.$router.push({name: 'filter', params: {filter: type}});
                if (type === 0) {
                    this.elements = this.$store.getters.get;
                    return;
                }
                this.elements = this.$store.getters.getByType(type);
            },
            filterByYear(year) {
                if (isNaN(year)) {
                    this.elements = this.$store.getters.get;
                    return;
                }
                this.$router.push({name: 'filter', params: {filter: year}});
                this.elements = this.$store.getters.getByYear(year);
            },
            orderBy(sorting) {
                this.$router.push({name: 'filter', params: {filter: sorting}});
                if (sorting === 'asc') {
                    this.elements = this.elements.sort(sortById);
                    return;
                }
                this.elements = this.$store.getters.get.sort(sortById).reverse();
            },
        }
    }

    function sortById(left, right) {
        if (left.id > right.id) {
            return 1;
        }
        return -1;

    }
</script>