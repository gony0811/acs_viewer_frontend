<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="Current Alarm"
      color="accent"
    >
      <v-data-table
        style="width: 50%"
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-1"
      />
    </material-card>

    <div class="py-3" />
  </v-container>
</template>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Alarm Code', value: 'alarmCode' },
          { text: 'Alarm Text', value: 'alarmText' },
          { text: 'Vehicle ID', value: 'vehicleId' },
          { text: 'Created Time', value: 'createTime' },
          { text: 'Alarm ID', value: 'alarmId' },
          { text: 'TransportCommand ID', value: 'transportCommandId' },
          { text: 'Near AGV', value: 'NEARAGV' },
          { text: 'Is Cross', value: 'ISCROSS' }
        ],
        items: []
      }
    },
    created () {
      this.getCurrentAlarm()
    },
    methods: {
      getCurrentAlarm () {
        const url = 'http://localhost:3000/api/current-alarm'
        axios.get(url
        ).then((res) => {
          this.items = res.data
        })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
</script>
