<template>
    <div class="container my-5">
        <b-row>
            <card v-for="(element) in elements" :key="element.id" :id="element.id"/>
        </b-row>
    </div>
</template>
<script>
    import Card from './Card.vue'

    export default {
        name: 'Elements',
        props: ['elements'],
        components: {
            Card
        }
    }
</script>