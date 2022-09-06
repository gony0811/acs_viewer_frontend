<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="Node"
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
          { text: 'Type', value: 'type' },
          { text: 'X Position', value: 'xPos' },
          { text: 'Y Position', value: 'yPos' },
          { text: 'Z Position', value: 'zPos' }
        ],
        items: []
      }
    },
    created () {
      this.getNode()
    },
    methods: {
      getNode () {
        const url = 'http://localhost:3000/api/node'
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
