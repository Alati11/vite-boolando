<script>
import cardJson from '../db.json';
import Card from './Card.vue';

export default {
  components: {
       Card,
    },
  
  data() {
    return {
      title: 'Vite-Booleando',
      // menu: []
      cardJson: cardJson,
    }
  },
  created() {
    console.log(this.cardJson);
  }
}
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="row">
        <div v-for="(product, index) in products" :key="product.id" class="col-4">
          <div class="card">
            <Card :id="card.id" :brand="card.brand" :name="card.name" 
            :price="card.price" />
            <!-- <figure class="card-image">
              <img src="../img/1.webp" alt="" />

              <span class="heart-icon">&hearts;</span>
              <div class="badge">
                <span class="discount-red">-50%</span>
                <span class="sustainability-green">Sostenibilià</span>
              </div>
              <p>Levi's</p>
              <h4>RELAXED FIT TEE UNISEX</h4>
              <SPAN>14,99 &euro;</SPAN> 29,99&euro;
            </figure> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.col-4 {
  flex-basis: calc((100% / 12) * 4);
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.card-image {
  position: relative;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 0;
  width: 50px;
  padding: 10px;
  display: block;
  text-align: center;
  font-size: 32px;
  color: black;
  background-color: white;
}

.discount-red {
  color: white;
  background-color: red;
  padding: 5px;
  font-size: 15px;
  height: 25px;
  /* position: absolute;
    bottom: 100px;
    left: 0; */

}

.sustainability-green {
  color: white;
  background-color: green;
  padding: 5px;
  height: 25px;
  /* position: absolute;
    bottom: 100px;
    left: 45px; */
}

.badge {
  position: absolute;
  bottom: 140px;
  left: 0;


}

.card-image:hover {
  opacity: 100;
  background-image: url(../img/1b.webp);
}
</style>