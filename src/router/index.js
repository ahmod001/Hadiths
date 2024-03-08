import { createRouter, createWebHistory } from 'vue-router'
import BooksVue from '../views/BooksVue.vue'
import layout from '../layout/Layout.vue'
import ChaptersVue from '../views/ChaptersVue.vue'
import HadithsVue from '../views/HadithsVue.vue'
import HomeVue from '../views/HomeVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeVue
    },
    {
      path: "/books",
      name: "Public",
      component: layout,
      children: [
        {
          path: "/books",
          name: "Books",
          component: BooksVue,
        },
        {
          path: "/:bookName",
          name: "Book",
          component: ChaptersVue,
        },
        {
          path: "/:bookName/:chapterId",
          name: "Hadith",
          component: HadithsVue,
        }
      ]

    }

  ]
})

export default router
