<template>
  <div class="home">
    <HelloWorld msg="Welcome to Twelvetro"/>
  </div>
</template>

<script>
import GameField from '@/components/GameField.vue';

export default {
  name: 'Game field',
  components: {
    GameField,
  },
};
</script>
