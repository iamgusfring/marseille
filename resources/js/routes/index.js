import { createRouter, createWebHistory } from 'vue-router';


import PostIndex from "@/components/Posts/Index.vue";
import PostCreate from "@/components/Posts/Create.vue";

const routes = [
    { 
        path: '/', 
        name: 'posts.index',
        component: PostIndex 
    },
    { 
        path: '/posts/create', 
        name: 'posts.create',
        component: PostCreate 
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

