<template>
  <div id="trip">
    <illustration/>
  </div>
</template>

<script>
import Illustration from './components/Illustration'

export default {
  name: 'trip',
  components: {
    Illustration
  },
}
</script>

<style scoped>
    #trip{
        background: white;
    }
</style>
