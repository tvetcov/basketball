<template>
    <div class="container my-5">
        <b-alert :show="isEmpty" variant="warning">No slam dunks for this filtering, push reset filters button, please.</b-alert>
        <b-row>
            <card v-for="(element) in elements" :key="element.id" :id="element.id"/>
        </b-row>
    </div>
</template>
<script>
    import Card from './Card.vue'

    export default {
        name: 'Elements',
        props: ['elements', 'isEmpty'],
        components: {
            Card
        },
    }
</script>