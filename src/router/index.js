import Vue from 'vue'
import VueRouter from 'vue-router'
import HuntsPage from '../views/HuntsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HuntsPage',
    component: HuntsPage
  },
  {
    path: '/CollectionsPage',
    name: 'CollectionsPage',
    component: () => import('../views/CollectionsPage.vue')
  },
  {
    path: '/RecipePage/:RecipeID',
    name: 'RecipePage',
    component: () => import('../views/RecipePage.vue')
  },
  {
    path: '/VendorsPage/:ItemID',
    name: 'VendorsPage',
    component: () => import('../views/VendorsPage.vue')
  },
  {
    path: '/CompletedScanPage/:ItemID/:VendorID',
    name: 'CompletedScanPage',
    component: () => import('../views/CompletedScanPage.vue')
  },
  {
    path: '/CardExpandPage/:VendorID',
    name: 'CardExpandPage',
    component: () => import('../views/CardExpandPage.vue')
  },
  {
    path: '/ScanPage/:VendorID',
    name: 'ScanPage',
    component: () => import('../views/ScanPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
