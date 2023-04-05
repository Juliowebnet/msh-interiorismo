import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InstagramFeed from 'vue3-instagram-feed'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faXmark)

const app = createApp(App)

app.use(router)
app.use(InstagramFeed)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
