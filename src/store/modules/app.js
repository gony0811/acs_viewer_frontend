// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/'
    },
    {
      title: 'Layout Viewer',
      icon: 'mdi-devices',
      to: '/viewer'
    },
    {
      title: 'Alarm',
      icon: 'mdi-alert-outline',
      items: [
        {
          title: 'Current Alarm',
          icon: 'mdi-alert',
          to: '/alarm/current-alarm'
        },
        {
          title: 'Alarm Spec',
          icon: 'mdi-pencil-box-outline',
          to: '/alarm/alarm-spec'
        }
      ]
    },
    {
      title: 'Resources',
      icon: 'mdi-vector-square',
      items: [
        {
          title: 'Node',
          icon: 'mdi-vector-point',
          to: '/resources/node'
        },
        {
          title: 'Link',
          icon: 'mdi-vector-line',
          to: '/resources/link'
        },
        {
          title: 'Icons',
          icon: 'mdi-chart-bubble',
          to: '/components/icons/'
        }
      ]
    }

    /*
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Regular Tables',
      icon: 'mdi-clipboard-outline',
      to: '/tables/regular/',
    },
    {
      title: 'Typography',
      icon: 'mdi-format-font',
      to: '/components/typography/',
    },

    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
    {
      title: 'Notifications',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    },
    */
  ]
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
