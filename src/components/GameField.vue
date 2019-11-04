<template>
  <div class="content">
    <div class="game-field">
      <div class="hex-row small-row">
        <div v-for="(hex, index) in fieldData[0]" :key="`hex-${index}`">
          <Hex :hex="hex"></Hex>
        </div>
      </div>
      <div class="hex-row even">
        <div v-for="(hex, index) in fieldData[1]" :key="`hex-${index}`">
          <Hex :hex="hex"></Hex>
        </div>
      </div>
      <div class="hex-row">
        <div v-for="(hex, index) in fieldData[2]" :key="`hex-${index}`">
          <Hex :hex="hex"></Hex>
        </div>
      </div>
      <div class="hex-row even">
        <div v-for="(hex, index) in fieldData[3]" :key="`hex-${index}`">
          <Hex :hex="hex"></Hex>
        </div>
      </div>
      <div class="hex-row small-row">
        <div v-for="(hex, index) in fieldData[4]" :key="`hex-${index}`">
          <Hex :hex="hex"></Hex>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hex from './Hex.vue';
export default {
  name: 'GameField',
  components: {
    Hex,
  },
  data() {
    return {
      fieldData: [
        [
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            }
        ],
        [
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            }
        ],
        [
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            }
        ],
        [
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            }
        ],
        [
            {
                "value": 0
            },
            {
                "value": 0
            },
            {
                "value": 0
            }
        ],
      ]
    }
  },
};

</script>
<style scoped lang="scss">
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .game-field {
    height: 496px;
    width: 538px;
  }
  .hex-row {
    clear: left;   
  }
  .hex-row.even {
    margin-left: 53px;
  }
  .hex-row.small-row {
    margin-left: 106px;
  }
</style>
