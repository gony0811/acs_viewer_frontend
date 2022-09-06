<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="Alarm Spec"
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
          { text: 'Alarm ID', value: 'alarmId' },
          { text: 'Alarm Code', value: 'alarmCode' },
          { text: 'Alarm Text', value: 'alarmText' },
          { text: 'Severity', value: 'severity' },
          { text: 'Description', value: 'description' }
        ],
        items: []
      }
    },
    created () {
      this.getAlarmSpec()
    },
    methods: {
      getAlarmSpec () {
        const url = 'http://localhost:3000/api/alarm-spec'
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
