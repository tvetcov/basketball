<template>
    <div>
        <filters/>
        <div class="container my-5">
            <b-row>
                <card v-for="(slam, index) in slams" :key="index" :slamId="slam.id"/>
            </b-row>
        </div>
    </div>
</template>
<script>
    import Filters from './Filters.vue'
    import Card from './Card.vue'

    export default {
        name: 'Grid',
        data() {
            return {
                slams: this.$store.getters['get'],
            }
        },
        components: {
            Filters,
            Card
        },
        created() {
            // console.log(this.$store.getters['getByYear'](2008));
        }
    }
</script>