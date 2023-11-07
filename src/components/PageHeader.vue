<script>
export default {
    data() {
        return {
            title: 'Vite-Booleando',
            menu: []
        }
    }
}
</script>

<template>
    <div class="header-page">
        <div class="header-link">
            <div class="link"><a href="#">Donna</a>
            </div>
            <div class="link"><a href="#">Uomo</a>
            </div>
            <div class="link"><a href="#">Bambini</a>
            </div>
        </div>
       
        <div class="header-title"> Boolean
        </div>
        <div class="header-shop"> <a href="#"> Shop</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../styles/partials/varibles' as *;
@use '../styles/general.scss';
@use '../styles/header.scss';

</style>