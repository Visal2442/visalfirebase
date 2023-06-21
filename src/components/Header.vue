<template>
    <!-- Small Screen  -->
    <v-navigation-drawer v-model="sidebar" temporary="">
        <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title" :to="{ name: item.name }">
                <v-list-item-title>
                    <v-icon>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- Large Screen  -->
    <v-toolbar>
        <span class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click="sidebar = !sidebar">
            </v-app-bar-nav-icon>
        </span>
        <v-toolbar-title>
            <router-link :to="{ name: 'Home' }" style="cursor: pointer" class=" text-decoration-none">
                {{ appTitle }}
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs">
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="{ name: item.name }">
                <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script setup>
import { ref } from 'vue';

const appTitle = ref('Awesome App');
const sidebar = ref(false);
const menuItems = ref([
    { title: 'Home', name: 'Home', icon: 'mdi-home-account' },
    { title: 'Books', name: 'Books', icon: 'mdi-book' },
    { title: 'Users', name: 'Users', icon: 'mdi-account' },
    { title: 'Maps', name: 'Maps', icon: 'mdi-map' },
])
</script>

<style scoped>
.v-btn--active{
    background: #b4cedf;
}
</style>