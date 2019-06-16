import Vue from 'vue'
import Router from 'vue-router'
import Elements from './components/Elements'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Elements
        },
        {
            path: '/:filter',
            name: 'filter',
            component: Elements
        },
    ]
})
