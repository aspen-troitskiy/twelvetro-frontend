<template>
  <div class="hex">
    <div class="top"></div>
    <div class="middle" 
      @mousedown="mouseDown"
      @mouseover="mouseover"
      @mouseup="mouseup">
      <div class="value-styling">
        {{hex.value || ''}}
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>

export default {
  name: 'Hex',
  props: ['hex', 'buildRequest'],
  methods: {
    mouseDown() {
      this.buildRequest(this.hex.id);
    },
    mouseover(move) {
      // console.log(this.hex.id);
    },
    mouseup() {
      this.buildRequest(null, this.hex.id);
    }
  }
};
</script>
<style scoped lang="scss">
  .hex {
    cursor: grab;
    // cursor: grabbing;
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
  .value-styling {
    font-size: 44px;
    font-weight: bold;
  }
</style>
