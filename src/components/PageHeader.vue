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
       
        <div class="header-title"> 
            <button class="modal">Booleando</button>
        </div>
        <div class="header-shop"> <a href="#"> Shop</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../styles/partials/varibles' as *;
@use '../styles/general.scss';
@use '../styles/header.scss';

.modal {
    width: 400px;
    align-items: center;
    background-color: lightgrey;
    color: black;
    transform: translate(-50, -50);
    z-index: 50;
    border-radius: 20px;
    padding: 20px;
    border: none;
    margin-left: -200px;
    box-shadow: 0px, 0px, 20px, rgba(0, 0, 0, 1);

}

</style>