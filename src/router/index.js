import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'
import layout from '../layout/Layout.vue'
import ChaptersVue from '../views/ChaptersVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Public",
      component: layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: HomeVue,
        },
        {
          path: "/:bookName",
          name: "Book",
          component: ChaptersVue,
        },
        {
          path: ":bookName/:id",
          name: "Hadith",
          component: '',
        }
      ]

    }

  ]
})

export default router
