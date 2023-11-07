<script>

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue';


export default {
    components: {
        PageHeader,
        PageFooter,
        PageMain,
    },

    data() {
        return {
            message: 'Vite Booleando!'
        }
    },

    methods: {
        saluta() {
            console.log('Booleando')
        }
    }
}
</script>

<template>
    <PageHeader />
    <PageMain />
    <PageFooter />
</template>

<style lang="scss">
// @use './styles/general.scss';
</style>