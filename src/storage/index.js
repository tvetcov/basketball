import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mediaItems: [],
    },
    getters: {
        get: (state) => {
            return state.mediaItems;
        },
        getById: (state) => (id) => {
            return state.mediaItems.find(
                mediaObject => {
                    return mediaObject.id === id
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
    mutations: {
        setMediaItems(state, data) {
            Vue.set(state, 'mediaItems', data);
        },
    },
    actions: {
        setAllItems({commit}, data) {
            commit('setMediaItems', data);
        },
        filterByType({commit, getters}, type) {
            let newItems = getters.getByType(type);
            commit('setMediaItems', newItems);
        },
        filterByYear({commit, getters}, year) {
            let newItems = getters.getByYear(year);
            commit('setMediaItems', newItems);
        },
    }
});
