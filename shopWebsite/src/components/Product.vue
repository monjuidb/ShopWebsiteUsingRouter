//create home component
<script setup>
import { useRoute } from 'vue-router';
import {  reactive, onBeforeMount } from 'vue'

const route = useRoute()
const id = route.params.id
const product = reactive({})

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            product.id = data.id
            product.title = data.title
            product.description = data.description
            product.images = data.images
        })   
    }
)
</script>
<template>
    <article class="mb-10">
        <h1 class="text-xl mb-2">
            {{ product.title }}
        </h1>
        <p>
            <img :src="product.images[0]" alt="">
            {{product.description }}
        </p>
    </article>
    
</template>

<style></style>