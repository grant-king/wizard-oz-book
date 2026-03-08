<template>
    <CoverTitle />
    <div class="h-32"></div>
    <div class="h-32"></div>
    <div class="text-black/80">
        XI
    </div>
    <div class="border-b-4 border-double">
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
        <Chapter011 />
    </div>
    <div class="h-64"></div>
    <RouterLink to="/chapter012">
        <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
            <div class="text-lime-900">
                XII
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import Chapter011 from '@/components/chapters/Chapter011.vue';
import CoverTitle from '@/components/CoverTitle.vue';

</script>