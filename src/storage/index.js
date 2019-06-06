import Vue from 'vue'
import Vuex from 'vuex'
import data from '../assets/nba.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mediaItems: Object.values(data),
    },
    getters: {
        get: (state) => {
            return state.mediaItems;
        },
        getById: (state) => (id) => {
            return state.mediaItems.find(
                mediaObject => {
                    return mediaObject.id == id
                }
            );
        },
        getByType: (state) => (type) => {
            return state.mediaItems.filter(
                mediaItem => {
                    return mediaItem.type === type;
                }
            );
        },
        getByYear: (state) => (year) => {
            return state.mediaItems.filter(
                mediaItem => {
                    return mediaItem.date.substr(0, 4) == year;
                }
            );
        },
    },
});
