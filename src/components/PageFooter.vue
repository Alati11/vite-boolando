<script>
import { store } from '../store'

export default {
    components: {

    },
    data() {
        return {
            store: store,
        }
    }
}    
</script>

<template>
    <div>
        {{ store.message }}
    </div>

</template>

<style>
</style>