//create home component
<script setup>
import { ref, reactive, onBeforeMount } from 'vue'

const productList = ref([])

onBeforeMount(() => {
    fetch('https://dummyjson.com/products?limit=20')
        .then(res => res.json())
        .then(data => {
            productList.value = data.productList
        })
    }
)


</script>
<template>
   
    <article class="mb-10" v-for="product in productList" :key="product.id">
        <h1 class="text-xl mb-2">
           <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
        </h1>
        <p>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.images[0]" alt="">
            </router-link>
            <button @click="viewDetail(product.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="posts.length>0">
        View Details
    </button>
            {{ post.body }}
        </p>
    </article>
    
</template>

<style></style>
