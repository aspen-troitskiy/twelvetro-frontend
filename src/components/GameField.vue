<template>
  <div class="content">
    <div class="game-field">
      <div class="hex-row small-row">
        <div v-for="(hex, index) in fieldData[0]" :key="`hex-${index}`">
          <Hex :hex="hex" :buildRequest="buildRequest"></Hex>
        </div>
      </div>
      <div class="hex-row even">
        <div v-for="(hex, index) in fieldData[1]" :key="`hex-${index}`">
          <Hex :hex="hex" :buildRequest="buildRequest"></Hex>
        </div>
      </div>
      <div class="hex-row">
        <div v-for="(hex, index) in fieldData[2]" :key="`hex-${index}`">
          <Hex :hex="hex" :buildRequest="buildRequest"></Hex>
        </div>
      </div>
      <div class="hex-row even">
        <div v-for="(hex, index) in fieldData[3]" :key="`hex-${index}`">
          <Hex :hex="hex" :buildRequest="buildRequest"></Hex>
        </div>
      </div>
      <div class="hex-row small-row">
        <div v-for="(hex, index) in fieldData[4]" :key="`hex-${index}`">
          <Hex :hex="hex" :buildRequest="buildRequest"></Hex>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hex from './Hex.vue';
const self = this;
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
              id: '0,0',
              value: 0
            },
            {
              id: '0,1',
              value: 0
            },
            {
              id: '0,2',
              value: 0
            }
        ],
        [
            {
              id: '1,0',
              value: 0
            },
            {
              id: '1,1',
              value: 0
            },
            {
              id: '1,2',
              value: 0
            },
            {
              id: '1,3',
              value: 0
            }
        ],
        [
            {
              id: '2,0',
              value: 0
            },
            {
              id: '2,1',
              value: 0
            },
            {
              id: '2,2',
              value: 4,
            },
            {
              id: '2,3',
              value: 0
            },
            {
              id: '2,4',
              value: 0
            }
        ],
        [
            {
              id: '3,0',
              value: 0
            },
            {
              id: '3,1',
              value: 0
            },
            {
              id: '3,2',
              value: 0
            },
            {
              id: '3,3',
              value: 0
            }
        ],
        [
            {
              id: '4,0',
              value: 0
            },
            {
              id: '4,1',
              value: 0
            },
            {
              id: '4,2',
              value: 0
            }
        ],
      ],
      requestObject: {  
        gameId: 'b42151c0-fd34-11e9-b3ae-c7e93778007b',
        from: null,
        to: null,
      }
    }
  },
  methods: {
    buildRequest(from, to) {
      if (from) {
        this.requestObject.from = from.split(',');
      } else if (to) {
        this.requestObject.to = to.split(',');
        this.fireAction(this.requestObject);
      }
    },
    fireAction(requestObject) {
      console.log(requestObject);
    }
  }
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
