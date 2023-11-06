<script>

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
// import PageMain from './components/PageMain.vue';


export default {
    components: {
        PageHeader,
        PageFooter,
        Product,

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
    <!-- <PageMain /> -->
    <PageFooter />
</template>

<style lang="scss">
@use './styles/general.scss';

.container {
	max-width: 980px;
	margin: 0 auto;
}

 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

img {
    max-width: 100%;
}

.col-4 {
	flex-basis: calc((100% / 12) * 4);  
}

.row > [class^='col'] {
	padding: 20px;
}

.row {
	display: flex;
	flex-wrap: wrap;
}

a {
    color:white;
    text-align: center;
    text-decoration: none;
}

.link {
    display: inline-block;
    margin-top: 30px;
    margin-left: 30px;
}

</style>