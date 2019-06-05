<template>
    <b-row class="text-center py-3 filters">
        <b-col sm="4">
            <b-button-group size="sm">
                <b-button variant="info">Pictures</b-button>
                <b-button variant="warning">Videos</b-button>
            </b-button-group>
        </b-col>
        <b-col sm="4" class="px-4 px-sm-0 mt-3 mt-sm-0">
            <b-form-select v-model="selected" :options="selectOptions" size="sm"></b-form-select>
        </b-col>
        <b-col sm="4" class="mt-3 mt-sm-0">
            <b-form-radio-group
                    id="btn-radios-1"
                    v-model="checked"
                    :options="radioOptions"
                    buttons
                    size="sm"
                    button-variant="success"
                    name="radios-btn"
            ></b-form-radio-group>
        </b-col>
    </b-row>
</template>
<script>
    export default {
        name: 'Filters',
        data() {
            return {
                selected: null,
                checked: null,
                selectOptions: [
                    {value: null, text: 'Select an year to sort'},
                    {value: 2012, text: '2012'},
                    {value: 2013, text: '2013'},
                    {value: 2015, text: '2015'},
                    {value: 2019, text: '2019'}
                ],
                radioOptions: [
                    {value: 0, text: 'Asc'},
                    {value: 1, text: 'Desc'},
                ],
            }
        },
    }
</script>