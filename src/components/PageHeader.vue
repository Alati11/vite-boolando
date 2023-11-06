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
            <div class="link"><a href="#">Donna</a>
            </div>
            <div class="link"><a href="#">Uomo</a>
            </div>    
            <div class="link"><a href="#">Bambini</a>
            </div> 
            <div class="header-title"> Boolean</div>
            <div class="header-shop"> Shop</div>

        </div>
    

</template>

<style lang="scss" scoped>
@use '../styles/partials/varibles' as *;

.container {
    max-width: 1024px;
}

.header-title {
    text-align: center;
}
.header-shop {
    text-align: right;
    padding: 10px;
}

.header-page {
    width: 100%;
    min-height: 50px;
    background-color: #EF6837;
    color: white;
 
}
</style>