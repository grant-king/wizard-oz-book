<template>
    <RouterLink to="/">
        <div class="border-y-4 border-double"></div>
        <div class="border-y-8 border-double"></div>
        <div class="text-right text-xs font-bold font-mono text-white bg-black/40 p-2">
            <img src="/1F4DA.svg" class="size-4 ml-auto" />
        </div>
        <div class="py-64 border-y-16 border-double">
            <div class="p-2 text-center">
                <div class="text-6xl font-serif">
                    The Wonderful
                </div>
                <div class="h-8"></div>
                <div class="text-2xl font-black">
                    Wizard of Oz
                </div>
            </div>
        </div>
        <div class="text-right text-xs font-bold font-mono text-white bg-black/40 p-2">
            © 1900 L. Frank Baum
        </div>
        <div class="border-y-8 border-double"></div>
        <div class="border-y-4 border-double"></div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>