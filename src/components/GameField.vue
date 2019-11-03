<template>
  <div>
    <div class="hex-row">
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
    <div class="hex-row">
      <div v-for="(hex, index) in fieldData[4]" :key="`hex-${index}`">
        <Hex :hex="hex"></Hex>
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
  .hex-row {
      clear: left;   
  }
  .hex-row.even {
      margin-left: 53px;
  }
</style>
