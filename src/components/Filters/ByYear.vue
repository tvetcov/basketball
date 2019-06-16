<template>
    <b-col sm="4" class="px-4 px-sm-0 mt-3 mt-sm-0">
        <b-form-select v-model="selected" :options="this.parseYears" size="sm" @change="selectedYear"/>
    </b-col>
</template>

<script>
    export default {
        name: 'ByYear',
        data() {
            return {
                selected: null,
            }
        },
        computed: {
            parseYears: function () {
                const elements = this.$store.getters['get'];
                if (!elements.length) {
                    return;
                }

                let years = [];
                elements.forEach(function (el) {
                    const year = (new Date(el.date)).getFullYear();
                    years.push(year);
                });
                const defaultOption = 'Select all years';
                return [defaultOption, ...years.filter(unique).sort()];
            },
            selectedItem: function () {
                let filter = this.$route.params.filter;
                return +filter > 2 ? filter : 'Select all years';
            }
        },
        created() {
            this.selected = this.selectedItem;
        },
        methods: {
            selectedYear(year) {
                this.$emit('selectedYear', year);
            },
        }
    }

    function unique(value, index, self) {
        return self.indexOf(value) === index;
    }

</script>