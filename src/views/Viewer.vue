<template>
  <div>
    <dx-vector-map
      id="vector-map"
      ref="vectorMap"
      :bounds="bounds"
      @click="markerClick"
    >
      <dx-layer :data-source="nodes" />
      <dx-layer :data-source="links" />
      <dx-tooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
      />
    </dx-vector-map>
    <dx-button
      id="reset"
      text="Reset"
      @click="reset"
    />
  </div>
</template>
<script>
  import axios from 'axios'
  import {
    DxVectorMap,
    DxLayer,
    DxTooltip
  } from 'devextreme-vue/vector-map'

  import {
    DxButton
  } from 'devextreme-vue/button'

  export default {
    components: {
      DxVectorMap,
      DxLayer,
      DxTooltip,
      DxButton
    },
    data () {
      return {
        nodes: '',
        links: '',
        bounds: [-500, 500, 500, -500]
      }
    },

    mounted () {
      this.resourceLoadLinks()
      this.resourceLoadNodes()

    },

    methods: {
      resourceLoadLinks () {
        var vectorMap = this.$refs.vectorMap.instance
        vectorMap.showLoadingIndicator()
        const url = 'http://localhost:3000/api/cache-link'
        axios.get(url
        ).then((res) => {
          this.links = res.data
          vectorMap.hideLoadingIndicator()
        })
          .catch((error) => {
            alert(error)
          })
      },
      resourceLoadNodes () {
        var vectorMap = this.$refs.vectorMap.instance
        vectorMap.showLoadingIndicator()
        const url = 'http://localhost:3000/api/cache-node'
        axios.get(url
        ).then((res) => {
          this.nodes = res.data
          vectorMap.hideLoadingIndicator()
        })
          .catch((error) => {
            alert(error)
          })
      },
      customizeTooltip (info) {
        if (info.layer.type === 'marker') {
          return { text: info.attribute('name') }
        }
        return null
      },
      markerClick (e) {
        if (e.target && e.target.layer.type === 'marker') {
          e.component.center(e.target.coordinates()).zoomFactor(100)
        }
      },
      reset () {
        const vectorMap = this.$refs.vectorMap.instance
        vectorMap.center(null)
        vectorMap.zoomFactor(10)
      }
    }
  }
</script>
<style>
#vector-map {
  height: 1000px;
}

#reset {
  margin: 10px 2px;
}
</style>
