import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faSquareGithub, faEnvelopeSquare)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
