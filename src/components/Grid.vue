<template>
    <div>
        <filters @selectedType="filterByType" @selectedYear="filterByYear" @selectedSorting="orederBy"/>
        <elements :elements="elements"/>
        <Footer/>
    </div>
</template>
<script>
    import Filters from './Filters.vue'
    import Elements from './Elements.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'Grid',
        data() {
            return {
                elements: this.$store.getters.get,
            }
        },
        components: {
            Filters,
            Elements,
            Footer,
        },
        methods: {
            filterByType(type) {
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
                this.elements = this.$store.getters.getByYear(year);
            },
            orederBy(sorting) {
                if (sorting === 0) {
                    this.elements = this.elements.sort(sortById);
                    return;
                }
                this.elements = this.$store.getters.get.sort(sortById).reverse();
            },
        }
    }

    function sortById(left, right) {
        //a>b = 1
        if (left.id > right.id) {
            return 1;
        }
        return -1;

    }
</script>