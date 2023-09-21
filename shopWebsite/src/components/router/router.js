import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product.vue'
import ProductList from '../components/ProductList.vue'
import Sidebar from '../components/Sidebar.vue'

const routes = [
    {
        path: '/', components: {
            default: ProductList,
            LeftSideBar: Sidebar
        }
    },
   
    
    {
        path: '/product/:id', components: {
            default: Product,
            LeftSideBar: Sidebar
        }
        
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router