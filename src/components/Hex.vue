<template>
  <div class="hex">
    <div class="top"></div>
    <div class="middle">{{hex.value}}</div>
    <div class="bottom"></div>
  </div>
</template>

<script>

export default {
  name: 'Hex',
  props: ['hex'],
};
</script>
<style scoped lang="scss">
  .hex {
    float: left;
    margin-left: 3px;
    margin-bottom: -26px;
  }
  .hex .top {
      width: 0;
      border-bottom: 30px solid #6C6;
      border-left: 52px solid transparent;
      border-right: 52px solid transparent;
  }
  .hex .middle {
      width: 104px;
      height: 60px;
      background: #6C6;
  }
  .hex .bottom {
      width: 0;
      border-top: 30px solid #6C6;
      border-left: 52px solid transparent;
      border-right: 52px solid transparent;
  }
</style>
