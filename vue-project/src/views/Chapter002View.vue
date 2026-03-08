<template>
    <CoverTitle />
    <div class="h-32"></div>
    <div class="h-32"></div>
    <div class="text-black/80">
        II
    </div>
    <div class="border-b-4 border-double">
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
        <Chapter002 />
    </div>
    <div class="h-64"></div>
    <RouterLink to="/chapter003">
        <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
            <div class="text-lime-900">
                III
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import Chapter002 from '@/components/chapters/Chapter002.vue';
import CoverTitle from '@/components/CoverTitle.vue';

</script>