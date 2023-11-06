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
     <main class="page-content">
        <div class="container">
            <div class="row">
                <div v-for="n in 12" :key="n" class="col-4">
                    
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/partials/varibles' as *;

.container {
    max-width: 1024px;

}
</style>