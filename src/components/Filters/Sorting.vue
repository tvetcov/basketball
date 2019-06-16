<template>
    <b-col sm="4" class="mt-3 mt-sm-0">
        <b-form-radio-group
                id="btn-radios-1"
                v-model="checked"
                :options="radioOptions"
                buttons
                size="sm"
                button-variant="success"
                name="radios-btn"
                @change="selectedSorting"
        ></b-form-radio-group>
    </b-col>
</template>
<script>
    export default {
        name: 'Sorting',
        data() {
            return {
                checked: null,
                radioOptions: [
                    {value: 'asc', text: 'Asc'},
                    {value: 'desc', text: 'Desc'},
                ],
            }
        },
        methods: {
            selectedSorting(sorting) {
                this.$emit('selectedSorting', sorting);
            },
        },
    }

</script>